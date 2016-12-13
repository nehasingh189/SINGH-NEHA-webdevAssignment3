/**
 * Created by Neha Singh on 19/11/2016.
 */
module.exports = function (app) {

  var model = require("./models/model.server")();

  require("./services/user.service.server.js")(app, model);
  require("./services/website.service.server.js")(app, model);
  require("./services/page.service.server.js")(app, model);
  require("./services/widget.service.server.js")(app);
};