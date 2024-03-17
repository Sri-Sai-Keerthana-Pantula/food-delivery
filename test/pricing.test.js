const request = require('supertest');
const app = require('../server');

describe('Pricing Route', () => {
    afterAll(async () => {
       console.log("Test cases done")
    });

    it('should calculate price and return 200 OK', async () => {
        const res = await request(app)
            .post('/pricing')
            .send({
                zone: 'central',
                organization_id: '005',
                total_distance: 12,
                item_type: 'perishable'
            });
        expect(res.statusCode).toEqual(200);
    });

    it('should calculate price and return 200 OK', async () => {
        const res = await request(app)
            .post('/pricing')
            .send({
                zone: 'central',
                organization_id: '005',
                total_distance: 6,
                item_type: 'perishable'
            });
        expect(res.statusCode).toEqual(200);
    });

    it('should return 400 Bad Request for invalid total_distance', async () => {
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

    it('should return 400 Bad Request for missing organization_id', async () => {
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
    it('should return 400 Bad Request for missing zone', async () => {
        const res = await request(app)
            .post('/pricing')
            .send({
                organization_id: 'invalid',
                total_distance: 20,
                item_type: 'perishable'
            });
        expect(res.statusCode).toEqual(400);
        expect(res.body).toHaveProperty('errors');
    });
    it('should return 400 Bad Request for missing total_distance', async () => {
        const res = await request(app)
            .post('/pricing')
            .send({
                organization_id: 'invalid',
                zone: 'central',
                item_type: 'perishable'
            });
        expect(res.statusCode).toEqual(400);
        expect(res.body).toHaveProperty('errors');
    });

    it('should return 400 Bad Request for missing item_type', async () => {
        const res = await request(app)
            .post('/pricing')
            .send({
                organization_id: 'invalid',
                zone: 'central',
                total_distance: 6,
            });
        expect(res.statusCode).toEqual(400);
        expect(res.body).toHaveProperty('errors');
    });
});
