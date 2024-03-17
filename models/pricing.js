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
      type: DataTypes.FLOAT, 
      allowNull: false,
      defaultValue: 1.5 
    },
    fix_price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 10 
  }
    },

    {
      tableName: 'pricing',
      timestamps: false 
  });
  

module.exports=Pricing;