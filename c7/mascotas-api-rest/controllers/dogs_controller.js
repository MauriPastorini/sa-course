const dogsService = require('../services/dogs_service');

const list = async (req, res, next) => {
    try {
        console.log('list')
        const dogs = await dogsService.list();
        req.result = dogs;
        next();
    } catch (err) {
        next(err);
    }
};

const fetch = async (req, res, next) => {
    try {
        const dog = await dogsService.fetch(req.params.id);
        req.result = dog;
        next();
    } catch (err) {
        next(err);
    }
};

const save = async (req, res, next) => {
    try {
        const dog = await dogsService.save(req.body)
        req.result = dog;
    } catch (err) {
        next(err);
    }
};

module.exports = {
    list,
    fetch,
    save
}