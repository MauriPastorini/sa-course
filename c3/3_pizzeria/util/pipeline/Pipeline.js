class Pipeline {
    constructor() {
        this.filters = [];
    }

    use(filter) {
        this.filters.push(filter);
    }

    async run(dataP) {
        let data = dataP;
        for (const filter of this.filters) {
            filter.asyncWork();
        }
        for (const filter of this.filters) {
            data = await filter.syncWork(data);
        }
        return data;
    }
}

module.exports = Pipeline;