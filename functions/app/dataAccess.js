var events = require('../models/events')
const admin = require('firebase-admin');
const serviceAccount = require("../cristian-camargo-firebase-adminsdk-4j5ma-175f2ec7b8.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
const clicksCollectionRef = db.collection('events').doc('raw').collection('clicks')
const viewsCollectionRef = db.collection('events').doc('raw').collection('views')

const addEventToFireStore = (userEvent) => {
    if (userEvent.eventType === events.pageClickEventType) {
        return clicksCollectionRef.add(userEvent)
    }

    if (userEvent.eventType === events.pageViewEventType) {
        return viewsCollectionRef.add(userEvent)
    }
    
    return new Promise((res, rej) => rej(`eventType ${userEvent.eventType} unknown`))
}

module.exports = {
    addEventToFireStore
}