const request = require('supertest');
const app = require('../index');

test('GET /products returns products', async () => {
  const res = await request(app).get('/products');
  expect(res.statusCode).toBe(200);
});
