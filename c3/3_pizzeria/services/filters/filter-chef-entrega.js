const filterChefEntrega = (input, next) => {
    console.log(`Pizza pronta ${input}`);
    next(null, input);
};

module.exports = filterChefEntrega;