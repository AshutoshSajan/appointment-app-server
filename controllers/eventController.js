const express = require("express")
const Event = require("../models/Event");

module.exports = {
    getEvents: (req, res) => {
        Event.find({}).select("-createdAt -updatedAt -__v").exec((err, events) => {
            if (err) {
                return res.status(500).json({ success: false, err, msg: "server error" })
            } else if (events) {
                return res.status(200).json({ success: true, events, msg: "successful response" })
            }
        })
    },

    createEvent: (req, res) => {
        console.log(req.body, "body")
        Event.create(req.body, (err, event) => {
            if (err) {
                return res.status(500).json({ success: false, err, msg: "server error" })
            } else if (event) {
                return res.status(200).json({ success: true, event, msg: "successful response" })
            }
        })
    }
}