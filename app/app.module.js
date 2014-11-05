(function() {

	// declare all modules

	angular.module("store", ["products"]);
	
	angular.module("products", ["product.directives", "product.panel", "product.reviews"]);

	angular.module("product.directives", []);

	angular.module("product.panel", []);

	angular.module("product.reviews", []);
})();