const pizzeriaService = require('../services/pizzeria/pizzeria_service');
const statusCode = require('./codes');

const getPizza = async (req, res, next) => {
    const type = req.query.type;
    const toping = req.query.toping;
    if(!pizzeriaService.isValidType(type)){
        return res.status(400).json({
            code: 1,
            msg: 'Invalid pizza type'
        })
    }
    if(!pizzeriaService.isValidToping(toping)){
        return res.status(400).json({
            code: 2,
            msg: 'Invalid pizza toping'
        })
    }
    try {
        const response = await pizzeriaService.prepararPizza(type, toping);
        res.status(statusCode.SUCCESS).json(response)
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getPizza
};