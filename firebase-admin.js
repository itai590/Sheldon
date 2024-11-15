const admin = require('firebase-admin');
const serviceAccount = require("./hey-sheldon-410513-firebase-adminsdk-hqwj9-9309682046.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

module.exports = { admin };