const filterVertidero = (input, next) => {
    console.log(`Agregando muzza y topings ${input}`);
    next(null, input);
};

module.exports = filterVertidero;