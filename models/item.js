const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('food', 'postgres', 'Admin', {
  dialect: 'postgres',
  host: 'localhost'
});

const Item = sequelize.define('item', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, 
{
    tableName: 'item',
    timestamps: false 
});

module.exports=Item;