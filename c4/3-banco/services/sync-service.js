const Queue = require('bull');

const newTransactionEvent = require('./../events/new-transaction-event');

const jobDefinitions = {
    newTransactionEvent,
};

const jobs = Object.entries(jobDefinitions).reduce(
    (acc, [jobName, jobDefinition]) => ({
        ...acc,
        [jobName]: new Queue(jobDefinition.queueName, jobDefinition.options || {}),
    }), {}
);

const startWorker = () => Object.entries(jobs).forEach(
    ([jobName, queue]) => {
        queue.process(jobDefinitions[jobName].handler)
        console.log(`Set up ${JSON.stringify(jobName)}`)
    }
);

module.exports = {
    Jobs: jobs,
    startWorker,
};