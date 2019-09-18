const {
    statusCode
} = require('../config/constants');
const Pipeline = require('../services/pipeline/abstract-pipeline');
const filterChefOrden = require('./../services/filters/filter-chef-orden')
const filterMasero = require('./../services/filters/filter-masero')
const filterSalsero = require('./../services/filters/filter-salsero')
const filterVertidero = require('./../services/filters/filter-vertidero')
const filterChefEntrega = require('./../services/filters/filter-chef-entrega')


const getPizza = async (req, res, next) => {

    try {
        var pipeline = new Pipeline();


        pipeline.use(filterChefOrden);
        pipeline.use(filterMasero);
        pipeline.use(filterSalsero);
        pipeline.use(filterVertidero);
        pipeline.use(filterChefEntrega);

        pipeline.run({
            type: req.params.type,
            toping: req.params.toping
        });

        pipeline.on('error', (err) => {
            console.log(`The error is ${err}`);
        });

        pipeline.on('end', (result) => {
            console.log(`La pizza esta pronta!`);
            req.send(result)
        });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = statusCode.INTERNAL_SERVER_ERROR;
        }
        next(err);
    }
};

module.exports = {
    getPizza
};