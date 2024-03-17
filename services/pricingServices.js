// // services/pricingService.js

// const pricings = require('../models/pricing');
// const organizations = require('../models/organization');
// console.log(organizations);
// const items = require('../models/item');

// // Function to calculate the total price for delivery
// async function calculatePrice(zone, organizationId, totalDistance, itemType) {
//   try {
//     console.log(organizationId);
//     // const organization = organizations.findByPk(org => org.id === organizationId);
//     const organization = await organizations.findByPk(organizationId); 
//     console.log("organization==",organization)
//         const item = items.find(item => item.type === itemType);
//         console.log("item==",item)
//         const pricing = pricings.find(pricing => pricing.organization_id === organizationId && pricing.item_id === item.id && pricing.zone === zone);
//         console.log("pricing==",pricing)
//         // Check if pricing data is available
//         if (!organization || !item || !pricing) {
//           throw new Error('Pricing data not found');
//         }
//         let totalPrice = pricing.fix_price
//         console.log("totalPrice==",totalPrice);
//         let diff = totalDistance - pricing.base_distance_in_km
//         console.log("diff==",diff);
//         if(diff >0)
//         {
//           const perKmPrice = itemType === 'perishable' ? pricing.km_price : 1;
//           console.log("perKmPrice==",perKmPrice);
//           totalPrice += diff * perKmPrice;
//           console.log("totalPrice==",totalPrice);
//         }


//     // Calculate total price based on pricing data, total distance, and item type
//     // let totalPrice = pricing.fix_price; // Base price for the base distance
//     // console.log("totalPrice==",totalPrice)
//     // const distanceBeyondBase = totalDistance - pricing.base_distance_in_km;
//     // console.log("distanceBeyondBase==",distanceBeyondBase)
//     // // Add additional cost for distance beyond the base
//     // if (distanceBeyondBase > 0) {
//     //   const perKmPrice = itemType === 'perishable' ? pricing.km_price_perishable : pricing.km_price_non_perishable;
//     //   console.log("perKmPrice==",perKmPrice);
//     //   totalPrice += distanceBeyondBase * perKmPrice;
//     //   console.log("totalPrice==",totalPrice);
//    // }

//     // Return the calculated price
//     return totalPrice;
//   } catch (error) {
//     // Handle errors, e.g., pricing data not found
//     console.error(error);
//     throw new Error('Failed to calculate price');
//   }
// }

// module.exports = {
//   calculatePrice
// };

















// // // services/pricingService.js

// // // const pricings = require('../models/pricing');

// // // // Function to calculate the total price for delivery
// // // async function calculatePrice(zone, organizationId, totalDistance, itemType) {
// // //   try {
// // //     // Fetch pricing data from mock data based on organizationId, itemType, and zone
// // //     const pricing = pricings.find(pricing => pricing.organization_id === organizationId && pricing.zone === zone);

// // //     // Check if pricing data is available
// // //     if (!pricing) {
// // //       throw new Error('Pricing data not found');
// // //     }

// // //     // Calculate total price based on pricing data, total distance, and item type
// // //     let totalPrice = pricing.fix_price; // Base price for the base distance
// // //     const distanceBeyondBase = totalDistance - pricing.base_distance_in_km;

// // //     // Add additional cost for distance beyond the base
// // //     if (distanceBeyondBase > 0) {
// // //       const perKmPrice = itemType === 'perishable' ? pricing.km_price_perishable : pricing.km_price_non_perishable;
// // //       totalPrice += distanceBeyondBase * perKmPrice;
// // //     }

// // //     // Return the calculated price
// // //     return totalPrice;
// // //   } catch (error) {
// // //     // Handle errors, e.g., pricing data not found
// // //     console.error(error);
// // //     throw new Error('Failed to calculate price');
// // //   }
// // // }

// // // module.exports = {
// // //   calculatePrice
// // // };











// // // // // // services/pricingService.js
// // // // // const Pricing = require('../models/pricing');

// // // // // async function calculatePrice(zone, organizationId, totalDistance, itemType) {
// // // // //   // Logic to calculate price based on zone, organization, distance, and item type
// // // // // }

// // // // // module.exports = {
// // // // //   calculatePrice
// // // // // };

// // // // // services/pricingService.js

// // // // const organizations = require('../models/organization');
// // // // const items = require('../models/item');
// // // // const pricings = require('../models/price');

// // // // async function calculatePrice(zone, organizationId, totalDistance, itemType) {
// // // //   // Fetch organization, item, and pricing data from mock data
// // // //   const organization = organizations.findById(organizationId);
// // // //   const item = items.find(item => item.type === itemType);
// // // //   const pricing = pricings.find(pricing => pricing.organizationId === organizationId && pricing.itemId === item.id && pricing.zone === zone);

// // // //   // Calculate price based on pricing data
// // // //   // Implement your pricing logic here using the mock data
// // // // }

// // // // module.exports = {
// // // //   calculatePrice
// // // // };
// // // // services/pricingService.js

// // // // Import necessary models
// // const organizations = require('../models/orgnisations');
// // const items = require('../models/item');
// // const pricings = require('../models/pricing');
// // //console.log("pricings==",pricings);
// // // Function to calculate the total price for delivery
// // async function calculatePrice(zone, organizationId, totalDistance, itemType) {
// //   try {
// //     // Fetch organization, item, and pricing data from mock data
// //     const organization = organizations.find(org => org.id === organizationId);
// //     console.log("organization==",organization)
// //     const item = items.find(item => item.type === itemType);
// //     console.log("item==",item)
// //     const pricing = pricings.find(pricing => pricing.organization_id === organizationId && pricing.item_id === item.id && pricing.zone === zone);
// //     console.log("pricing==",pricing)
// //     // Check if pricing data is available
// //     if (!organization || !item || !pricing) {
// //       throw new Error('Pricing data not found');
// //     }

// //     // Calculate total price based on pricing data and total distance
// //     let totalPrice = pricing.base_distance_in_km * pricing.fix_price;
// //     console.log("totalPrice===",totalPrice)
// //     const distanceBeyondBase = totalDistance - pricing.base_distance_in_km;
// //     if (distanceBeyondBase > 0) {
// //       totalPrice += distanceBeyondBase * pricing.km_price;
// //       console.log("totalPrice2222===",totalPrice)
// //     }

// //     // Return the calculated price
// //     return totalPrice;
// //   } catch (error) {
// //     // Handle errors, e.g., pricing data not found
// //     console.error(error);
// //     throw new Error('Failed to calculate price');
// //   }
// // }

// // module.exports = {
// //   calculatePrice
// // };

const Organization = require('../models/organization');
const Item = require('../models/item');
const Pricing = require('../models/pricing');

// Define a function to retrieve pricing data
async function calculatePrice(zone, organization_id, total_distance, item_type) {
    try {
        // Retrieve organization from the database
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
        throw error; // Throw the error for handling elsewhere
    }
}

module.exports = { calculatePrice};