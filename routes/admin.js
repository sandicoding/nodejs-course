const express = require('express');

const router = express.Router();

// method get
router.get('/add-product', (req, res, next) => {
    console.log('Add Product Page');
    res.send('<form action="/admin/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
    
});

//method post
router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});


module.exports = router;

