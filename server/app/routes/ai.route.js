const ai = require('../services/ai.service.js');

module.exports = function (app) {
  app.post('/api/aiProcessor', ai.gameProcessor);
};
