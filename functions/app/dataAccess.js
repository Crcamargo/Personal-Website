var events = require('../models/events');
const admin = require('firebase-admin');
const serviceAccount = require("../cristian-camargo-firebase-adminsdk-4j5ma-175f2ec7b8.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
const clicksCollectionRef = db.collection('events').doc('raw').collection('clicks');
const viewsCollectionRef = db.collection('events').doc('raw').collection('views');

/* To create a distributed counter we have to break analytic counters into shards */
const shardsDocumentId = 'FhstJMJq47MCjYVAZVOc';
const numShards = 3;

function getAnalyticsShard() {
    // Select a random shard
    const shardId = Math.floor(Math.random() * numShards).toString();

    return db.collection('analytics')
             .doc(shardsDocumentId)
             .collection('shards')
             .doc(shardId)
}

const addEventToFireStore = (userEvent) => {
    const shardRef = getAnalyticsShard()

    if (userEvent.eventType === events.pageClickEventType) {
        let resumeCountPromise = userEvent.itemClicked === 'resume' ?
            shardRef.update({totalResumeDownloads: admin.firestore.FieldValue.increment(1)}) :
            new Promise((res, rej) => res())

        return resumeCountPromise.then(() => clicksCollectionRef.add(userEvent))
    }

    if (userEvent.eventType === events.pageViewEventType) {
        return shardRef.update({totalViews: admin.firestore.FieldValue.increment(1)})
                       .then(dbRes => viewsCollectionRef.add(userEvent))
    }
    
    return new Promise((res, rej) => rej(`eventType ${userEvent.eventType} unknown`))
}

module.exports = {
    addEventToFireStore
}