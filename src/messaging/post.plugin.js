exports.post = function() {
  this.add({
    channel: 'post',
    action: 'queue'
  }, (msg, respond) => {
    respond(null, {
      message: msg.message
    });
  });
}
