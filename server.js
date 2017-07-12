'use strict';
const express =  require('express');
const app =  express();

app.use('/', express.static('dist'));

app.set('port',(process.env.PORT || 5000));

app.listen(app.get('port'),()=>{
    console.log(app.get('port'));
})