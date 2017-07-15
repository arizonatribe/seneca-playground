const ORD_AREA = 'orders';

exports.OrderManager = function() {
  this.add({
      area: ORD_AREA,
      action: 'fetch'
    }, (args, done) => {
      var order = this.make('orders');
      orders.list$({id: args.id}, done);
    })
    .add({
       area: ORD_AREA,
       action: 'delete'
    }, (args, done) => {
      var order = this.make('orders');
      orders.remove$({id: args.id}, err => done(err, null));
    })
    .add({
       area: ORD_AREA,
       action: 'create'
    }, (args, done) => {
      var orders = this.make('orders');

      Object.assign(orders, {
        total: args.products.reduce((a, b) => a.price + b.price, {price: 0}),
        customer_email: args.email,
        customer_name: args.name
      });

      orders.save$((err, order) => {
        var client = Object.assign({}, this.client({host: '192.168.0.2', port: 8080}));
        client.act({
          area: 'email',
          action: 'send',
          template: 'new_order',
          to: args.email,
          toName: args.name
        }, done); 
      });
    }); 
}
