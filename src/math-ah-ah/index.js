const seneca = require('seneca')();
const {AddAndMultiply} = require('./add-and-multiply.plugin');
const {WordCount} = require('./wordcount.plugin');
const {actionLog} = require('../utils');

seneca
  .use(AddAndMultiply)
  .use(WordCount)
  .add({
    role: 'math',
    cmd: 'sum',
    integer: true
  }, function(msg, respond) {
    this.act({
      role: 'math',
      cmd: 'sum',
      left: Math.floor(msg.left),
      right: Math.floor(msg.right)
    }, respond);
  })
  .add({
    component: 'greeter'
  }, (msg, respond) => {
    respond(null, {
      message: `Hello ${msg.name || 'World'}`
    });
  })
  .act({
    role: 'math',
    cmd: 'sum',
    left: 1.5,
    right: 2.5
  }, actionLog)
  .act({
    role: 'math',
    cmd: 'sum',
    left: 1.5,
    right: 2.5,
    integer: true
  }, actionLog)
  .act({
    role: 'math',
    cmd: 'product',
    left: 3,
    right: 4
  }, actionLog)
  .act({
    component: 'greeter',
    name: 'David'
  }, actionLog)
  .act({
    cmd: 'wordcount',
    phrase: 'The need for microservices'
  }, actionLog)
  .act({
    cmd: 'wordcount',
    skipShort: true,
    phrase: 'The world of software development has evolved quickly over the past 40 years'
  }, actionLog);

