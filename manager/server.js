const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const path = require('path');

app.use(express.static( __dirname + '/angular-app/dist/angular-app'));

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.listen(8000, function(){
    console.log("Listening on port 8000");
})