const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // 引入 CORS 中間件
const productsRoutes = require('./routes/products');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // 啟用 CORS
app.use(bodyParser.json());
app.use('/api/products', productsRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});