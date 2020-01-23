/* 1. Init Express*/
const express = require('express');
const morgan = require('morgan');

//inicializaciones
const app = express();

//settings
//puerto
app.set('port', process.env.PORT || 4000);

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
