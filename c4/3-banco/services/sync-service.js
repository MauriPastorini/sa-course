const Queue = require('bull');

const bankEvents = require('../events/bank-events');

const jobDefinitions = {
    bankEvents
};

const jobs = Object.entries(jobDefinitions).reduce(
    (acc, [jobName, jobDefinition]) => ({
        ...acc,
        [jobName]: new Queue(jobDefinition.queueName, jobDefinition.options || {}),
    }), {}
);

//TODO conectar mongo
const startWorker = () => Object.entries(jobs).forEach(

    ([jobName, queue]) => {
        try {
            queue.process(jobDefinitions[jobName].handler)
            console.log(`Set up ${JSON.stringify(jobName)}`)
        } catch (err) {
            throw new Error(err)
        }
    }

);

module.exports = {
    Jobs: jobs,
    startWorker,
};