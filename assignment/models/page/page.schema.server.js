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
        dateCreated: {type: Date, default: Date.now()}
    },{collection: "page"});
    return PageSchema;
};