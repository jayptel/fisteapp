const express = require('express');
const Product = require('../models/products_models.js');
const routes = express.Router();
const {getProducts,getProduct,createProduct,updateProduct,deleteProduct} = require('../controllers/products_controllers.js');

routes.get('/',getProducts);

routes.get('/:id',getProduct);

routes.post('/',createProduct);

routes.put('/:id',updateProduct);

routes.delete('/:id', deleteProduct);

module.exports=routes;