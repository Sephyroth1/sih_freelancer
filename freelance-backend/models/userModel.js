const { DataTypes, UniqueConstraintError } = require('sequelize');
const { sequelize } = require('../config/db');


const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        alloweNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        alloweNull: false,
    },
    password: {
        type: DataTypes.STRING,
        alloweNull: false
    },
    role: {
        type: DataTypes.ENUM('freelancer', 'client', 'intern'),
        alloweNull: false
    }
});

module.exports = User;