const mongoose = require('mongoose');

// Define MenuItem schema
const MenuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true }
});

// Create and export the model
const MenuItem = mongoose.model('MenuItem', MenuItemSchema);

module.exports = MenuItem;
