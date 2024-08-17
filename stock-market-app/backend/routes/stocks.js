const express = require('express');
const router = express.Router();
const Stock = require('../models/Stock');

// Get all stocks
router.get('/', async (req, res) => {
  try {
    const stocks = await Stock.find();
    res.json(stocks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get stock by symbol
router.get('/:symbol', async (req, res) => {
  try {
    const stock = await Stock.findOne({ symbol: req.params.symbol });
    if (!stock) return res.status(404).json({ message: 'Stock not found' });
    res.json(stock);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new stock
router.post('/', async (req, res) => {
  const stock = new Stock({
    symbol: req.body.symbol,
    name: req.body.name,
    price: req.body.price,
    data: req.body.data,
  });
  try {
    const newStock = await stock.save();
    res.status(201).json(newStock);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
