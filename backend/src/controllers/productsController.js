// filepath: backend/src/controllers/productsController.js
const fs = require('fs');
const path = require('path');

// Path to the products.json file
const productsFilePath = path.join(__dirname, '../data/products.json');

// Function to read products from the JSON file
const readProducts = () => {
    const data = fs.readFileSync(productsFilePath);
    return JSON.parse(data);
};

// Get all products
exports.getProducts = (req, res) => {
    const products = readProducts();
    res.json(products);
};