const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

let corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

module.exports = function(app, db) {
};
// require('./app/config/db');
require('./app/routes')(app, {});
const port = 8080;

app.listen(port, () => {
    console.log('We are live on ' + port);
});