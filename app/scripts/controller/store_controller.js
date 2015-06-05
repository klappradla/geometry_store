'use strict';
app.controller('StoreController', function($http) {
  var store = this;
  store.products = [];

  $http.get('products.json').success(function(data) {
    store.products = data;
  }); 
});