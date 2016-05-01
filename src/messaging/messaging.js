import seneca from '../seneca';
import {email} from './email.plugin';
import {sms} from './sms.plugin';
import {post} from './post.plugin';
import {actionLog} from '../utils';

seneca.use(email).use(sms).use(post)
  .act({
    channel: 'email',
    action: 'pending',
    message: 'lorem ipsum dolor sit amet'
  }, actionLog);

//seneca.listen({
//  port: 1932,
//  host: '10.30.1.2'
//});
