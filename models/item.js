// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Item extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Item.init({
//     id: DataTypes.INTEGER,
//     type: DataTypes.STRING,
//     description: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Item',
//   });
//   return Item;
// };




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
    timestamps: false // Disable timestamps
});

module.exports=Item;