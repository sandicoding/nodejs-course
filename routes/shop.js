const express = require('express');

const router = express.Router();

router.get('/',  (req, res, next) => {
    console.log('dalam middleware lain');
    res.send('<h1>Hello Express Js</h1>')
});


module.exports = router;