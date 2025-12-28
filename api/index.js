const express = require('express');
const app = express();

app.use(express.json());

app.get('/products', (req, res) => {
  res.json([{ id: 1, name: 'Laptop', price: 1200 }]);
});

app.post('/orders', (req, res) => {
  res.status(201).json({ message: 'Order placed successfully' });
});

module.exports = app;
