const path = require('path');

const express = require('express');

const router = express.Router();
const adminData = require('./admin');

router.get('/',  (req, res, next) => {
    const products = adminData.products;
    res.render('shop', {
        prods : products, 
        docTilte : 'Shop', 
        path : '/', 
        hasProducts : products.length > 0,
        productCSS : true,
        shopActive : true,
        
    });
});


module.exports = router;