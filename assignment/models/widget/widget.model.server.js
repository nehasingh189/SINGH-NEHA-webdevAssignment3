/**
 * Created by Neha Singh on 13/12/2016.
 */
module.exports = function () {
    var model = {};
    var mongoose = require("mongoose");
    var WidgetSchema = require("./widget.schema.server")();
    var WidgetModel = mongoose.model("WidgetModel", WidgetSchema);

    var api = {
        createWidget: createWidget,
        setModel:setModel
    };
    return api;

    function setModel(_model) {
        model = _model;
    }

    function createWidget(pageId, widget) {

        console.log("\n In Widget model server \n");
        widget._page = pageId;

        return WidgetModel
            .find({"_page": pageId})
            .then(
                function (widgets) {


                    widget.order = widgets.length;
                    console.log("Widget model server in function(widgets) widget length: " + widgets.length);

                    WidgetModel
                        .create(widget)
                        .then(
                            function (newWidget) {
                                console.log("Widget new " + newWidget);

                                return model
                                    .pageModel
                                    .findPageById(pageId)
                                    .then(
                                        function (page) {
                                            page.widgets.push(newWidget);
                                            newWidget._page = page._id;
                                            page.save();
                                            newWidget.save();
                                            return newWidget;
                                        },
                                        function (error) {
                                            return error;
                                        }
                                    );
                            },
                            function (error) {
                                console.log(" \n error while creating widget : "+error);
                                return error;

                            }
                        );
                }
            );
    }
};