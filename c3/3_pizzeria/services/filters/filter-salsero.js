const filterSalsero = (input, next) => {
    console.log(`Poniendo salsa ${input}`);
    next(null, input);
};

module.exports = filterSalsero;