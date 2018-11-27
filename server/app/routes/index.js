const aiRoutes = require('./ai.route');

module.exports = function (app) {
  aiRoutes(app);
  // Other route groups could go here, in the future
};
