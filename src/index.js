/* 1. Init Express*/
const express = require('express');
const morgan = require('morgan');

//4 Templates
const exhbs = require('express-handlebars');
const path = require('path');


//inicializaciones
const app = express();

//settings
// 3 puerto
app.set('port', process.env.PORT || 4000);

//4
app.set('views',path.join(__dirname, 'views'))
app.engine('.hbs', exhbs({
    defaultLayout : 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}));
app.set('view engine', '.hbs');

//Middlewares
app.use(morgan('dev'));

//Variable global

// 3 Routes
app.use(require('./routes'));

//Public

//Startin the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
