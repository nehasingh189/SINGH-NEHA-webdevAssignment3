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
<<<<<<< HEAD
    var widgetModel = require("./widget/widget.model.server")();
=======
>>>>>>> b4f3e40382553237058b388dc6a4f0d813592dd8

    var model = {
        userModel : userModel,
        websiteModel : websiteModel,
<<<<<<< HEAD
        pageModel: pageModel,
        widgetModel: widgetModel
=======
        pageModel: pageModel
>>>>>>> b4f3e40382553237058b388dc6a4f0d813592dd8
    };
    websiteModel.setModel(model);
    userModel.setModel(model);
    pageModel.setModel(model);
<<<<<<< HEAD
    widgetModel.setModel(model);
=======
>>>>>>> b4f3e40382553237058b388dc6a4f0d813592dd8

    return model;

};