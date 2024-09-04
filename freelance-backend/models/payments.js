import { DataTypes } from "sequelize";
import {sequelize} from '../config/db';

const Project = require('./projects');
const FreeLancer = require('./freelancers');

const Payments = await sequelize.define('Payment', {
    payment_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    project_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Project,
            key: 'project_id',
        },
    },
    amount: {
        type: DataTypes.INTEGER(10, 2),
        allowNull: false,
    },
    payment_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    status: {
        type: DataTypes.ENUM('in progress', 'completed', 'failed'),
        allowNull: false,
    },
});

Payments.belongsTo(User, { as: 'Freelancer', foreignKey: 'freelancer_id' });

module.exports = Payments;