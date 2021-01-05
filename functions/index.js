const functions = require('firebase-functions');
const path = require('path');

var routes = require('./app/routes')
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')

/* Set up express app */
var app = express().use(bodyParser.json())
                   .use(cors())
                   .use(express.static('./build'))

// TODO add rate limiting middleware

/* Set up api routes */
var router = express.Router();
router.post('/events', routes.events);
app.use('/api', router);

/* Resolve any other calls as the web app */
app.get('*', (req, res) => res.sendFile(path.resolve('.', 'build', 'index.html')))

exports.app = functions.https.onRequest(app)