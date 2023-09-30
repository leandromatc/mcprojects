const pageRoutes = require("./pageRoutes");

function routes(app) {
  app.use(pageRoutes);
}

module.exports = routes;
