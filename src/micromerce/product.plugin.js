const {pluginInit} = require('../utils');

exports.ProductManager = function(options) {
  const PROD_AREA = 'product';

  this.add({
    area: PROD_AREA,
    action: 'fetch'
  }, (args, done) => {
    var products = this.make('products');
    products.list$({}, done);
  })
  .add({
    area: PROD_AREA,
    action: 'fetch',
    criteria: 'byCategory'
  }, (args, done) => {
    var products = this.make('products');
    products.list$({
      category: args.category
    }, done);
  })
  .add({
    area: PROD_AREA,
    action: 'fetch',
    criteria: 'byId'
  }, (args, done) => {
    var product = this.make('products');
    product.load$(args.id, done);
  })
  .add({
    area: PROD_AREA,
    action: 'add'
  }, (args, done) => {
    var products = this.make('products');
    ['category', 'name', 'description', 'price'].forEach(prop => products[prop] = args[prop]);
    products.save$((err, product) => {
      done(err, products.data$(false));
    });
  })
  .add({
    area: PROD_AREA,
    action: 'remove'
  }, (args, done) => {
    var product = this.make('products');
    product.remove$(args.id, err => {
      done(err, null);
    });
  })
  .add({
    area: PROD_AREA,
    action: 'edit'
  }, (args, done) => {
    this.act({
      area: 'product',
      action: 'fetch',
      criteria: 'byId',
      id: args.id
    }, (err, result) => {
      result.data$({
        name: args.name,
        category: args.category,
        description: args.description,
        price: args.price
      });
      result.save$((err, product) => {
        done(product.data$(false));
      });
    })
  })
 .add({init: 'products'}, pluginInit);
}
