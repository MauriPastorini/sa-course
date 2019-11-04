const convert = require('xml-js');
const statusCodes = require('../middlewares/codes');

module.exports = (req, res, next) => {
    switch (req.accepts('json', 'xml')) {
        case 'json':
            renderJSON(req, res);
            break;
        case 'xml':
            renderXML(req, res);
            break;
        default:
            renderJSON(req, res);
            break;

    }
};

function renderJSON(req, res) {
    let body = req.result;
    res.status(statusCodes.SUCCESS).json(body);
}

function renderXML(req, res) {
    let options = {
        compact: true,
        ignoreComment: true,
        spaces: 4
    };
    let body = req.result.toObject();
    delete body._id;
    delete body.__v;
    body = convert.js2xml(body, options);

    res.set('application/xml').send(body)
}