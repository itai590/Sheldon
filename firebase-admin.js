const admin = require('firebase-admin');
const serviceAccount = require("./hey--x-38b58556a4af.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

module.exports = { admin };