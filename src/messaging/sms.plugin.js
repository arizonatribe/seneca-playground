export function sms(options) {
  this.add({
    channel: 'sms',
    action: 'send'
  }, (msg, respond) => {
    respond(null, {
      message: msg.message
    });
  })
  .add({
    channel: 'sms',
    action: 'pending'
  }, (msg, respond) => {
    respond(null, {
      message: msg.message
    });
  })
  .add({
    channel: 'sms',
    action: 'read'
  }, (msg, respond) => {
    respond(null, {
      message: msg.message
    });
  });
}

