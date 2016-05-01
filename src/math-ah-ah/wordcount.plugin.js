import {pluginInit} from '../utils';

export function WordCount(options) {
  this.add({
    cmd: 'wordcount'
  }, (msg, respond) => {
    respond(null, {
      words: msg.phrase.split(' ').length
    });
  })
  .add({
    cmd: 'wordcount',
    skipShort: true
  }, (msg, respond) => {
    respond(null, {
      words: msg.phrase.split(' ').filter(word => word.length > 3).length
    });
  })
  .add({init: 'wordcount'}, pluginInit);
}