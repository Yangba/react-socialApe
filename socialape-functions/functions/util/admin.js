const admin = require('firebase-admin');
var serviceAccount = require("../cred/serviceAccountKey.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
    //databaseURL: "https://socialape-63126.firebaseio.com"
});

const db = admin.firestore();

module.exports ={admin, db};