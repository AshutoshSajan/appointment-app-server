var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var eventSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    start: {
        type: String,
        required: true
    },
    end: {
        type: String,
        required: true
    }
}, { timestamps: true })


module.exports = mongoose.model("Event", eventSchema);
