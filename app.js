const path = require('path');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const expressHbs =require('express-handlebars');

const app = express();

app.engine('hbs', expressHbs({
    layoutsDir: 'views/layouts/',
    defaultLayout: 'main-layout',
    extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoute = require('./routes/shop');
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoute);

app.use((req, res, next) => {
    res.status(404).render('404');
});



// const include = require('');
app.listen(3000);




