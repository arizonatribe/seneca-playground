import {pluginInit} from '../utils';

export function AddAndMultiply(options) {
  options.log('ready to add and multiply');
  this.add({
    role: 'math',
    cmd: 'sum'
  }, (msg, respond) => {
    respond(null, {
      answer: msg.left + msg.right
    });
  })
  .add({
    role: 'math',
    cmd: 'product'
  }, (msg, respond) => {
    respond(null, {
      answer: msg.left * msg.right
    });
  })
  .add({init: 'math'}, pluginInit);
}