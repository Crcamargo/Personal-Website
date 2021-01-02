var eventModels = require('../models/events');
var dataAccess = require('../app/dataAccess');

const events = (req, res) => {
    var validation = eventModels.validateEvent(req.body)

    if (validation.error) {
        res.status(400).json({ error: validation.error })
        return
    }

    // Add client ip
    var cleanEvent = {
        ...req.body,
        ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress || "unknown"
    }

    dataAccess.addEventToFireStore(cleanEvent)
              .then(dbRes => res.json({ status: 'Success', docId: dbRes.id }))
              .catch(error => res.status(500).json({ status: 'Error', error: error}))
};

module.exports = {
    events
}