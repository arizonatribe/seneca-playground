const {logger} = require('utilitarian/logger');
const mandrill = require('mandrill-api/mandrill');

exports.mandrillClient = new mandrill.Mandrill('<YOUR-KEY-HERE>');

mandrillClient.users.info({},
  result => logger.info(result),
  error => logger.error(error)
);
