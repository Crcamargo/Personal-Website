const functions = require('firebase-functions');

var routes = require('./app/routes')
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')

/* Set up express app */
var app = express().use(bodyParser.json())
                   .use(cors())
                   .use(express.static('../ui/build'))

// TODO add rate limiting middleware

/* Set up routes */
var router = express.Router();
router.post('/events', routes.events);

app.use('/api', router);

exports.app = functions.https.onRequest(app)