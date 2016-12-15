/**
 * Created by Neha Singh on 12/12/2016.
 */
module.exports = function () {
    var mongoose = require("mongoose");
    var PageSchema = mongoose.Schema({
        _website: {type: mongoose.Schema.ObjectId, ref:"WebsiteModel"},
        name: {type: String, required: true},
        title: String,
        description: String,
<<<<<<< HEAD
        dateCreated: {type: Date, default: Date.now()},
        widgets: [{type: mongoose.Schema.Types.ObjectId, ref:'widgetModel'}]
=======
        dateCreated: {type: Date, default: Date.now()}
>>>>>>> b4f3e40382553237058b388dc6a4f0d813592dd8
    },{collection: "page"});
    return PageSchema;
};