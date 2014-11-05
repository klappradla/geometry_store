(function() {
	angular.module("store")

	// controller specifies http service for later dependency injection
	.controller("StoreController", ["$http", function($http) {
		var store = this;
		store.products = [];

		$http.get("app/assets/json/products.json").success(function(data) {
			store.products = data;
		});
	}]);

})();