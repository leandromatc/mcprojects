const pageRoutes = require("./pageRoutes");
const contactRoutes = require("./contactRoutes");

function routes(app) {
  app.use(pageRoutes);
  app.use("/contact", contactRoutes);
}

module.exports = routes;
