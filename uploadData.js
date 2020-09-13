const firestoreService = require("firestore-export-import");
const serviceAccount = require("./serviceAccountKey.json");

const databaseURL = "DB_URL";

firestoreService.initalizeApp(serviceAccount, databaseURL);

firestoreService.restore("data.json");