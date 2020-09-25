var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var eventSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    }
}, { timestamps: true })


module.exports = mongoose.model("Event", eventSchema);
