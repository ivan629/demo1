const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));


require('./routes/game.route')(app);

// Create a Server
const server = app.listen(8080, function() {
    let host = server.address().address;
    let port = server.address().port;

    console.log('App listening at http://localhost:%s', host, port);
});
