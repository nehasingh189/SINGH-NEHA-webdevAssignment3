/**
 * Created by Neha Singh on 10/12/2016.
 */
module.exports = function () {
    var model={};
    var mongoose = require("mongoose");
    var WebsiteSchema = require("./website.schema.server")();
    var WebsiteModel = mongoose.model("WebsiteModel", WebsiteSchema);

    var api = {
        createWebsite: createWebsite,
        findWebsiteForUser:findWebsiteForUser,
        findWebsiteById:findWebsiteById,
        updateWebsite: updateWebsite,
        deleteWebsite:deleteWebsite,
        setModel: setModel
    };
    return api;

    function setModel(_model) {
        console.log("In SetModel website.model " + _model);
        model = _model;
    }

    function deleteWebsite(websiteId) {
        return model
            .websiteModel
            .findWebsiteById(websiteId)
            .then(function (website) {
                return model
                    .userModel
                    .findUserById(website._user)
                    .then(
                        function (user) {
                            for (var i = 0; i < user.websites.length; ++i) {
                                if (website._id.equals(user.websites[i])) {
                                    user.websites.splice(i, 1);
                                    user.save();
                                    break;
                                }
                            }
                            return WebsiteModel.remove({_id: websiteId});
                        },
                        function (error) {
                            return error;
                        }
                    );
            });
    }

    function updateWebsite(websiteId, website)
    {
        return WebsiteModel
            .update({_id: websiteId}, {
                $set: website
            });
    }

    function findWebsiteById(websiteId) {
        return WebsiteModel.findById(websiteId);
    }
    
    function findWebsiteForUser(userId) {
        return WebsiteModel.find({"_user": userId});
    }
    
    function createWebsite(userId,website) {
        //return WebsiteModel.create(website);
        return WebsiteModel
            .create(website)
            .then(
                function (newWebsite) {
                    //console.log("New Website in website model " + newWebsite + "\n  User ID received : " + userId);
                    model.userModel
                        .findUserById(userId)
                        .then(
                            function (user) {
                                //console.log(" User in website model " + user);
                                user.websites.push(newWebsite);
                                newWebsite._user = user._id;
                                user.save();
                                newWebsite.save();
                                return newWebsite;
                            },
                            function (error) {
                                //console.log("Inner ERROR from website model " + error);
                                return error;
                            }
                        );
                },
                function (error) {
                    //console.log("Outer ERROR from website model " + error);
                    return error;
                }
            );
    }
};