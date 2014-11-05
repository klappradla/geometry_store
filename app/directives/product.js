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
				controller: "GalleryCtrl",
				controllerAs: "gallery"
			};
		});

})();
