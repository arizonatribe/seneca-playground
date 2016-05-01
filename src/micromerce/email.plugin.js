import {pluginInit} from '../utils';
import {mandrillClient} from './mailer-mandrill';
import {transporter} from './mailer-node';
import {Email} from './email';

export function Emailer(options) {
  // this.add({
  //   area: 'email',
  //   action: 'send',
  //   template: '*'
  // }, (args, done) => {
  //   console.log('sending');

  //   mandrillClient.messages.sendTemplate({
  //     template_name: args.template,
  //     template_content: {},
  //     message: new Email(args)
  //   }, result => {
  //     done(null, {
  //       status: result.status
  //     }, error => {
  //       done({
  //         code: error.name
  //       }, null);
  //     });
  //   });
  // })
  // .add({
  //   area: 'email',
  //   action: 'send'
  // }, (args, done) => {
  //   console.log(args);

  //   mandrillClient.messages.send({
  //     message: new Email(args)
  //   }, result => {
  //     done(null, {
  //       status: result.status
  //     }, error => {
  //       done({
  //         code: error.name
  //       }, null);
  //     })
  //   });
  // })
  // .add({
  //   area: 'email',
  //   action: 'send',
  //   cc: '*'
  // }, (args, done) => {
  //   mandrillClient.messages.send({
  //     message: new Email(args)
  //   }, result => {
  //     done(null, {
  //       status: result.status
  //     }, error => {
  //       done({
  //         code: error.name
  //       }, null);
  //     })
  //   });
  // })
  this.add({
    area: 'email',
    action: 'send'
  }, (args, done) => {
    transporter.sendMail(new Email(args), (error, info) => {
      if (error) {
        done({code: error}, null);
      }
      done(null, {status: 'sent'});
    })
  });
}