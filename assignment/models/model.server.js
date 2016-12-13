/**
 * Created by Neha Singh on 10/12/2016.
 */
module.exports = function () {

    var connectionString = 'mongodb://127.0.0.1:27017/wam_fall_2016';
    var mongoose = require("mongoose");
    mongoose.connect(connectionString);

    var userModel = require("./user/user.model.server")();
    var websiteModel = require("./website/website.model.server")();
    var pageModel= require("./page/page.model.server")();

    var model = {
        userModel : userModel,
        websiteModel : websiteModel,
        pageModel: pageModel
    };
    websiteModel.setModel(model);
    userModel.setModel(model);
    pageModel.setModel(model);

    return model;

};