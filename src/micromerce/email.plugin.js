const {logger} = require('utilitarian/logger');
const {pluginInit} = require('../utils');
const {mandrillClient} = require('./mailer-mandrill');
const {transporter} = require('./mailer-node');
const Email = require('./email');

exports.Emailer = function(options) {
  // this.add({
  //   area: 'email',
  //   action: 'send',
  //   template: '*'
  // }, (args, done) => {
  //   logger.info('sending');

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
  //   logger.info(args);

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
