const statusCodes = require('./codes');

const catsService = require('../services/cats_service');

const list = async (req, res, next) => {
    try {
        const cats = await catsService.list();
        return res.status(statusCodes.SUCCESS).json(cats);
    } catch (err) {
        next(err);
    }
};

const fetch = async (req, res, next) => {
    try {
        const cat = await catsService.fetch(req.params.id);
        return res.status(statusCodes.SUCCESS).json(cat);
    } catch (err) {
        next(err);
    }
};

const save = async (req, res, next) => {
    try {
        const cat = await catsService.save(req.body)
        return res.status(statusCodes.SUCCESS).json(cat);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    list,
    fetch,
    save
}