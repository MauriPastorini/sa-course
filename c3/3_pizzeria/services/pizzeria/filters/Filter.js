class Filter {

    constructor(name) {
        console.log(`My filter name is ${name}`);
    }

    async asyncWork() {
        console.log('Async work');
    }

    async syncWork(data) {
        throw new Error('You have to implement this my friend')
    }
}

module.exports = Filter;