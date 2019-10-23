const statusCodes = require('./codes');

const dogsService = require('../services/dogs_service');

const list = async (req, res, next) => {
    try {
        console.log('list')
        const dogs = await dogsService.list();
        return res.status(statusCodes.SUCCESS).json(dogs);
    } catch (err) {
        next(err);
    }
};

const fetch = async (req, res, next) => {
    try {
        const dog = await dogsService.fetch(req.params.id);
        return res.status(statusCodes.SUCCESS).json(dog);
    } catch (err) {
        next(err);
    }
};

const save = async (req, res, next) => {
    try {
        const dog = await dogsService.save(req.body)
        return res.status(statusCodes.SUCCESS).json(dog);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    list,
    fetch,
    save
}