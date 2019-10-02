module.exports = (sequelize, types) =>
    sequelize.define(
        'transaction', {
            id: {
                type: types.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            concept: {
                type: types.STRING,
                allowNull: false,
            },
            amount: {
                type: types.DECIMAL(12, 2),
                allowNull: false,
            },
        }, {
            timestamps: true,
        },
    );