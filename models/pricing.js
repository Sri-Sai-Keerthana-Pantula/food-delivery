// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Pricing extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Pricing.init({
//     organizationId: DataTypes.INTEGER,
//     item_id: DataTypes.INTEGER,
//     zone: DataTypes.STRING,
//     base_distance_in_km: DataTypes.FLOAT,
//     km_price: DataTypes.FLOAT,
//     fix_price: DataTypes.INTEGER
//   }, {
//     sequelize,
//     modelName: 'Pricing',
//   });
//   return Pricing;
// };






const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('food', 'postgres', 'Admin', {
  dialect: 'postgres',
  host: 'localhost'
});

const Pricing = sequelize.define('pricing', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
},
  organization_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  item_id: {
    type: DataTypes.INTEGER,
    allowNull:false
},

    zone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    base_distance_in_km: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    km_price: {
      type: DataTypes.FLOAT, // Assuming price can have decimals
      allowNull: false,
      defaultValue: 1.5 // Set default value to 1.5
    },
    fix_price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 10 // Set default value to 10
  }
    },

    {
      tableName: 'pricing',
      timestamps: false // Disable timestamps
  });
  

module.exports=Pricing;