/**
 * Created by Neha Singh on 12/12/2016.
 */

module.exports = function () {
    var model = {};
    var mongoose = require("mongoose");
    var PageSchema = require("./page.schema.server")();
    var PageModel = mongoose.model("PageModel", PageSchema);

    var api = {
        createPage: createPage,
        findPageByWebsiteId: findPageByWebsiteId,
        findPageById:findPageById,
        updatePage:updatePage,
        deletePage:deletePage,
        setModel: setModel
    };
    return api;

    function setModel(_model) {
        model = _model;
    }

    function deletePage(pageId) {
            return model.pageModel
                .findPageById(pageId)
                .then(
                    function (page) {
                        return model.websiteModel
                            .findWebsiteById(page._website)
                            .then(
                                function (website) {

                                    for (var i = 0; i < website.pages.length; ++i) {
                                        if (page._id.equals(website.pages[i])) {
                                            website.pages.splice(i, 1);
                                            website.save();
                                            break;
                                        }
                                    }

                                    return PageModel.remove({_id: pageId});

                                },
                                function (error) {
                                    res.sendStatus(400).send(error);
                                }
                            );
                    },
                    function (error) {
                        res.sendStatus(400).send(error);
                    }
                );
    }

    function updatePage(pageId, page) {
        return PageModel.update({_id:pageId},{$set:page});
    }
    function findPageById(pageId) {
        return PageModel.findById(pageId);
    }
    function findPageByWebsiteId(websiteId) {
        return PageModel.find({ "_website" : websiteId})
    }

    function createPage(websiteId,page) {
        return PageModel
                    .create(page)
                    .then(
                        function (newPage) {
                                model
                                    .websiteModel
                                    .findWebsiteById(websiteId)
                                    .then(
                                        function (website) {
                                            website.pages.push(newPage);
                                            newPage._website = website._id;
                                            website.save();
                                            newPage.save();
                                            return newPage;
                                        },
                                        function (error) {
                                            return error;
                                        }
                                    );
                        },
                        function (error) {
                            return error;
                        }
                    );
    }
}