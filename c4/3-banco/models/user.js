module.exports = (sequelize, types) =>
    sequelize.define(
        'user', {
            id: {
                type: types.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            fullName: {
                type: types.STRING,
                allowNull: false
            },
            email: {
                type: types.STRING,
                allowNull: false
            },
        }, {
            timestamps: true,
        },
    );