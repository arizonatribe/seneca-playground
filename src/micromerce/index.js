const express = require('express');
const bodyParser = require('body-parser');
const seneca = require('../seneca');
const SenecaEntity = require('seneca-entity');
const {OrderManager} = require('./order.plugin');
const {ProductManager} = require('./product.plugin');
const {Emailer} = require('./email.plugin');
const {Ui} = require('./ui.plugin');

seneca.use(SenecaEntity)
  .use(OrderManager)
  .use(ProductManager)
  .use(Ui)
  .use(Emailer)
  .use('mongo-store', {
    name: 'seneca',
    host: '127.0.0.1',
    port: '27017'
  })
  .ready(err => {
    seneca.act('role:web', {
      use: {
        prefix: '/products',
        pin: {
          area: 'product',
          action: '*'
        },
        map: {
          fetch: {GET: true},
          edit: {GET: false, POST: true},
          delete: {GET: false, DELETE: true}
        }
      }
    });
   
    seneca.act('init:api', () => {
      console.log('initing api');
    }) 
    seneca.act({
      area: 'email',
      action: 'send',
      subject: '2001 - A Space Odyssey',
      to: 'no-reply@github.com',
      toName: 'Testy McTesterton'
    }, (err, result) => {
      
    })
    .act({
      area: 'email',
      action: 'send',
      subject: 'Planet of The Apes',
      to: 'no-reply@github.com',
      toName: 'Testy McTesterton',
      cc: 'no-reply@bitbucket.com',
      ccName: 'Adam McEavesdropper'
    }, (err, result) => {
      
    })    

    const app = express();

    app.use(bodyParser.json())
      .use(seneca.export('web'))
      .listen(3000);
  });

