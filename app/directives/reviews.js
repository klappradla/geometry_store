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