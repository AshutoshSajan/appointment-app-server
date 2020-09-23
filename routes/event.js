var express = require('express');
var router = express.Router();

const eventController = require("../controllers/eventController")
/* GET home page. */
router.get('/', eventController.getEvents);
router.post('/', eventController.createEvent);

module.exports = router;
