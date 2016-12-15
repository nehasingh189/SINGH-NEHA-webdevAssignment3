/**
 * Created by Neha Singh on 13/12/2016.
 */
module.exports = function () {
    var mongoose = require("mongoose");
    var WidgetSchema = mongoose.Schema({
        _page:  {type: mongoose.Schema.ObjectId, ref:"PageModel"},
        type: {type: String, enum: ['HEADING', 'IMAGE', 'YOUTUBE', 'HTML', 'INPUT']},
        name: {type: String, required: true},
        text: String,
        placeholder: String,
        description: String,
        url: String,
        width: String,
        height: String,
        rows: Number,
        size: Number,
        class: String,
        icon: String,
        deletable: Boolean,
        formatted: Boolean,
        dateCreated: {type: Date, default: Date.now()},
        order: Number
    },{collection: "widget"});

    return WidgetSchema;
};