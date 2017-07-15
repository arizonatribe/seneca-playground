const seneca = require('../seneca');
const {email} = require('./email.plugin');
const {sms} = require('./sms.plugin');
const {post} = require('./post.plugin');
const {actionLog} = require('../utils');

seneca.use(email)
  .use(sms)
  .use(post)
  .act({
    channel: 'email',
    action: 'pending',
    message: 'lorem ipsum dolor sit amet'
  }, actionLog);

//seneca.listen({
//  port: 1932,
//  host: '10.30.1.2'
//});
