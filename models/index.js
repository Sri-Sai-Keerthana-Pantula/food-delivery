const Sequelize = require('sequelize');
const dbConfig = require('../config/database'); 
const OrganizationModel = require('./organization'); 
const ItemModel = require('./item'); 
const PricingModel = require('./pricing');

// Initialize Sequelize with database configuration
const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, dbConfig);

// Define models
const Organization = OrganizationModel(sequelize, Sequelize);
const Item = ItemModel(sequelize, Sequelize);
const Pricing = PricingModel(sequelize, Sequelize);
Organization.hasMany(Pricing, { foreignKey: 'organization_id' });
Pricing.belongsTo(Organization, { foreignKey: 'organization_id' });

// Export models
module.exports = {
  Organization,
  Item,
  Pricing,
  sequelize,
};