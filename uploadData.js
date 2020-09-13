const firestoreService = require("firestore-export-import");
const serviceAccount = require("./serviceAccountKey.json");

const databaseURL = "https://def-hacks-learn.firebaseio.com";

firestoreService.initializeApp(serviceAccount, databaseURL);

firestoreService.restore("data.json");