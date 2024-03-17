const express = require('express');
const router = express.Router();
const { calculatePrice } = require('../services/pricingServices');
const { body, validationResult } = require('express-validator');

const validateRequest = [
    body('zone').notEmpty().withMessage('Zone is required'),
    body('organization_id').notEmpty().withMessage('Organization ID is required'),
    body('total_distance').isNumeric().withMessage('Total distance must be a number'),
    body('item_type').notEmpty().withMessage('Item type is required'),
];

router.post('/', validateRequest, async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { zone, organization_id, total_distance, item_type } = req.body;
    try {
        const totalPrice = await calculatePrice(zone, organization_id, total_distance, item_type);
        res.json({ total_price: totalPrice });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports=router;