const filterChefOrden = (input, next) => {
    console.log(`Nuevo pedido de pizza ${input}`);
    next(null, input);
};

module.exports = filterChefOrden;