module.exports = (sequelize, types) =>
    sequelize.define(
        'account', {
            id: {
                type: types.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            currency: {
                type: types.STRING,
                allowNull: false,
            },
        }, {
            timestamps: true,
        },
    );