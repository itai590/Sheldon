const {admin} = require('./firebase-admin');

const AGGR_TIME = 60;
const BARK_TEXT = "Woof!";

const context = {
  ref: null,
  text: "",
};

const EventEmitter = require('events');

const emitter = new EventEmitter();

var sendNotification = async function() {
  if (context.ref) {
    context.text = context.text + " " + BARK_TEXT;
    return context.ref.set({
      text: context.text,
      updateTime: admin.firestore.FieldValue.serverTimestamp()
    }, {
      merge: true
    })
    .then(() => {
      console.log("updated hey!");
    })
    .catch((err) => {
      console.error("hey update error", err);
    })
  } 
  else {
    context.text = BARK_TEXT;
    await admin.firestore().collection('hubs/sheldon/messages').add({
      text: context.text,
      createTime: admin.firestore.FieldValue.serverTimestamp(),
    }).then((ref) => {
      context.ref = ref;
      console.log("sent hey!");
    })
    .catch((err) => {
      console.error("hey error", err);
    })
    
    setTimeout(() => {
      context.ref = null;
      context.text = "";
      emitter.emit('reset');
    }, AGGR_TIME * 1000);
  }
};

module.exports = {
  send: sendNotification,
  on: emitter.on,
};