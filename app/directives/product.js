(function() {
	
	angular.module("product.directives")

		.directive("productTitle", function() {
			return {
				restrict: "E",
				templateUrl: "app/views/product-title.html"
			}
		})

		.directive("productDescription", function() {
			return {
				restrict: "E",
				templateUrl: "app/views/product-description.html"
			}
		})

		.directive("productSpecs", function() {
			return {
				restrict: "A",
				templateUrl: "app/views/product-specs.html"
			}
		})

		.directive("gallery", function() {
			return {
				restrict: "E",
				templateUrl: "app/views/gallery.html",
				controller: function() {
					this.current = 0;

					this.setCurrent = function(index) {
						this.current = index || 0;
					};
				},
				controllerAs: "gallery"
			};
		});

})();
