exports.email = function(options) {
  this.add({
    channel: 'email',
    action: 'send'
  }, (msg, respond) => {
    respond(null, {
      message: msg.message
    });
  })
  .add({
    channel: 'email',
    action: 'pending'
  }, (msg, respond) => {
    respond(null, {
      message: msg.message
    });
  })
  .add({
    channel: 'email',
    action: 'read'
  }, (msg, respond) => {
    respond(null, {
      message: msg.message
    });
  });
}
