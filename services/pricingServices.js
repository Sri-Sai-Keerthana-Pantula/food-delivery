const Organization = require('../models/organization');
const Item = require('../models/item');
const Pricing = require('../models/pricing');

// Define a function to retrieve pricing data
async function calculatePrice(zone, organization_id, total_distance, item_type) {
    try {
        const organization = await Organization.findByPk(organization_id);
        console.log('Organization:', organization);

        // Retrieve item from the database
        const item = await Item.findOne({ where: { type: item_type } });
        console.log('Item:', item);

        // Retrieve pricing from the database
        const pricing = await Pricing.findOne({ 
            where: { 
                organization_id: organization_id, 
                item_id: item.id, 
                zone: zone 
            } 
        });
        console.log('Pricing:', pricing);

        // Check if pricing data is available
        if (!pricing) {
            throw new Error('Pricing data not found');
        }
        let totalPrice = pricing.fix_price
        console.log("totalPrice==",totalPrice);
        let diff = total_distance - pricing.base_distance_in_km
        console.log("diff==",diff);
        if(diff >0)
        {
          const perKmPrice = item_type === 'perishable' ? pricing.km_price : 1;
          console.log("perKmPrice==",perKmPrice);
          totalPrice += diff * perKmPrice;
          console.log("totalPrice==",totalPrice);
        }
        return totalPrice
    } catch (error) {
        console.error('Error retrieving data:', error);
        throw error;
    }
}

module.exports = { calculatePrice};