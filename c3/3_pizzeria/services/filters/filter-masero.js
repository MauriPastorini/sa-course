const filterMasero = (input, next) => {
    console.log(`Aprontando masa! ${input}`);
    next(null, input);
};

module.exports = filterMasero;