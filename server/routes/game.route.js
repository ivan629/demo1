module.exports = function (app) {
    const  game = require('../controller/game.controller.js');

    app.post('/api/sendData', game.gameProcessor);
};