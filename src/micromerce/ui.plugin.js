const UI_AREA = 'ui';

export function Ui(options) {
  this.add({
    area: UI_AREA,
    action: 'products'
  }, (args, done) => {
    this.act({
      area: 'product',
      action: 'fetch'
    }, (err, result) => {
      done(err, result);
    });
  })
  .add({
    area: UI_AREA,
    action: 'productbyid'
  }, (args, done) => {
    this.act({
      area: 'product',
      action: 'fetch',
      criteria: 'byId',
      id: args.id
    }, (err, result) => {
      done(err, result);
    });
  })
  .add({
    area: UI_AREA,
    action: 'createorder'
  }, (args, done) => {
    this.act({
      area: 'product',
      action: 'fetch',
      criteria: 'byId',
      id: args.id
    }, (err, product) => {
      if(err) {
        done(err, null);
      }

      this.act({
        area: 'orders',
        action: 'create',
        products: [product],
        email: args.email,
        name: args.name
      }, (err, order) => {
        done(err, order);
      });
    });
  })
  .add('init:api', (msg, respond) => {
    this.act('role:web', {
      use: {
        prefix: '/api',
        pin: 'area:ui,action:*',
        map: {
          products: {GET:true},
          productbyid: {GET:true, suffix:'/:id'},
          createorder: {POST:true}
        }
      }
    }, respond);
  });
}
