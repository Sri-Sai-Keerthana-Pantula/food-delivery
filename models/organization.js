// // 'use strict';
// // const {
// //   Model
// // } = require('sequelize');
// // module.exports = (sequelize, DataTypes) => {
// //   class Organization extends Model {
// //     /**
// //      * Helper method for defining associations.
// //      * This method is not a part of Sequelize lifecycle.
// //      * The `models/index` file will call this method automatically.
// //      */
// //     static associate(models) {
// //       // define association here
// //     }
// //   }
// //   Organization.init({
// //     id: DataTypes.INTEGER,
// //     name: DataTypes.STRING
// //   }, {
// //     sequelize,
// //     modelName: 'Organization',
// //   });
// //   return Organization;
// // };

// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('postgres', 'postgres', 'Admin', {
//   dialect: 'postgres',
//   host: 'localhost'
// });

// const Organization = sequelize.define('Organization', {
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false
//   }
// });

// module.exports= Organization;





// models/organization.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('food', 'postgres', 'Admin', {
  dialect: 'postgres',
  host: 'localhost'
});


const Organization = sequelize.define('organization', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'organization',
    timestamps: false // Disable timestamps
});

module.exports=Organization;
