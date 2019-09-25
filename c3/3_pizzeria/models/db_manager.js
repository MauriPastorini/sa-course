const Masa = require('./Masa');
const Salsa = require('./Salsa');

let masas = [];
let salsas = [];

let masasPreparandose = new Set();
let salsasPreparandose = new Set();

exports.prepareMasa = async () => {
    let masaPreparandose = new Promise((resolve, reject) => {
        setTimeout(() => {
            masas.push(new Masa());
            resolve();
        }, 10000);
    });
    masasPreparandose.add(masaPreparandose);
    masaPreparandose.then(() => {
        masasPreparandose.delete(masaPreparandose);
    });
    masaPreparandose.catch(() => {
        masasPreparandose.delete(masaPreparandose);
    });
    return masaPreparandose;
}

exports.prepareSalsa = async () => {
    let salsaPreparandose = new Promise((resolve, reject) => {
        setTimeout(() => {
            salsas.push(new Masa());
            resolve();
        }, 10000);
    });
    salsasPreparandose.add(salsaPreparandose);
    salsaPreparandose.then(() => {
        salsasPreparandose.delete(salsaPreparandose);
    });
    salsaPreparandose.catch(() => {
        salsasPreparandose.delete(salsaPreparandose);
    });
    return salsaPreparandose;
}

exports.extraerCantidaDedMasa = async (cantidad) => {
    if (masas.length > 0 && masas[0].contenido >= cantidad) {
        masas[0].contenido -= cantidad;
        if (masas[0].contenido <= 0) {
            masas.shift();
        }
        return cantidad;
    } else {
        await Promise.race(masasPreparandose);
        return await this.extraerCantidaDedMasa(cantidad);
    }
}

exports.extraerCantidadDeSalsa = async (cantidad) => {
    if (salsas.length > 0 && salsas[0].contenido >= cantidad) {
        salsas[0].contenido -= cantidad;
        if (salsas[0].contenido <= 0) {
            salsas.shift();
        }
        return cantidad;
    } else {
        await Promise.race(salsasPreparandose);
        return await this.extraerCantidadDeSalsa(cantidad);
    }
}

exports.obtenerMasaDisponible = () => {
    return masas.length + masasPreparandose.size;
}

exports.obtenerSalsaDisponible = () => {
    return salsas.length + salsasPreparandose.size;
}