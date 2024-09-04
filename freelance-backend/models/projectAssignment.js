const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const Project = require('./project');
const { defaultValueSchemable } = require('sequelize/lib/utils');

const projectAssignment = await sequelize.define('projectAssignment', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    project_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Project,
            key: 'project_id'
        }
    },
    assigned_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    status: {
        type: ENUM('pending', 'in_progress', 'completed'),
        allowNull: false,
        defaultValue: 'pending',
    },
});

projectAssignment.belongsTo(User, { as: 'Freelancer', foreignKey: 'freelancer_id' });