const seneca = require('seneca')();
const express = require('express');
const Interjections = require('./interjections.plugin');

const app = express();

seneca
  .use(Interjections)
  .act({role: 'web'}, {
    use: {
      prefix: '/interjections',
      pin: {
        role: 'api',
        cmd: '*'
      },
      map: {
        bazinga: {GET: true},
        zoinks: {GET: true},
        bazinga: {GET: true},
        zoinks: {GET: true},
        wowsers: {GET: true},
        arrrggh: {GET: true},
        inconceivable: {GET: true},
        'frau-blucher': {GET: true},
        excellent: {GET: true},
        bogus: {GET: true},
        dude: {GET: true},
        brilliant: {GET: true}
      }
    }
  });

app.use(seneca.export('web')).listen(3000);

