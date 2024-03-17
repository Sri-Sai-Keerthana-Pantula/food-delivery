// test/pricing.test.js
const request = require('supertest');
const app = require('../app'); // Assuming your Express app is exported from app.js

describe('Pricing Route', () => {
    it('should calculate price and return 200 OK', async () => {
        const res = await request(app)
            .post('/pricing')
            .send({
                zone: 'central',
                organization_id: '001',
                total_distance: 12,
                item_type: 'perishable'
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('total_price');
        // Add more assertions based on your expected response
    });

    it('should return 400 Bad Request for invalid input', async () => {
        const res = await request(app)
            .post('/pricing')
            .send({
                organization_id: "005",
                zone: 'central',
                total_distance: 'invalid', 
                item_type: 'perishable'
            });
        expect(res.statusCode).toEqual(400);
        expect(res.body).toHaveProperty('errors');
    });

    it('should return 400 Bad Request organisation_is not not there', async () => {
        const res = await request(app)
            .post('/pricing')
            .send({
                zone: 'central',
                total_distance: 20,
                item_type: 'perishable'
            });
        expect(res.statusCode).toEqual(400);
        expect(res.body).toHaveProperty('errors');
 });

});
