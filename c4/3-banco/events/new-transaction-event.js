module.exports = {
    queueName: 'event.newTransaction',
    options: {
        limiter: {
            max: 5,
            duration: 1000,
        },
    },
    async handler({
        data
    }) {
        console.log(`handling job: ${JSON.stringify(data)}`);
        if (data.event === 'created') {
            //TODO: handle insert in mongo
        }
    }
};