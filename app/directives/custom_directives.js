angular.module("store")
	.directive("productTitle", function() {
		return {
			restrict: "E", // element
			templateUrl: "app/views/product-title.html"
		}
	});

angular.module("store")
	.directive("productDescription", function() {
		return {
			restrict: "E",
			templateUrl: "app/views/product-description.html"
		}
	});

angular.module("store")
	.directive("productImages", function() {
		return {
			restrict: "E",
			templateUrl: "app/views/product-images.html"
		}
	});

angular.module("store")
	.directive("productSpecs", function() {
		return {
			restrict: "A", // attribute
			templateUrl: "app/views/product-specs.html"
		}
	});

angular.module("store")
	.directive("productReviews", function() {
		return {
			restrict: "E",
			templateUrl: "app/views/product-reviews.html"
		}
	});

angular.module("store")
	.directive("reviewForm", function() {
		return {
			restrict: "A",
			templateUrl: "app/views/review-form.html"
		}
	});