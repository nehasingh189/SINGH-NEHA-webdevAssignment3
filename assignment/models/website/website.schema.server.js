/**
 * Created by Neha Singh on 10/12/2016.
 */
module.exports = function () {
    var mongoose = require("mongoose");
    var WebsiteSchema = mongoose.Schema({
        _user: {type: mongoose.Schema.ObjectId, ref: "UserModel"},
        name: {type: String, required: true},
        desc: String,
        dateCreated: {type: Date, default: Date.now()},
        pages: [{type: mongoose.Schema.Types.ObjectId, ref:'PageModel'}]
    },{collection: "website"});
    return WebsiteSchema;
};