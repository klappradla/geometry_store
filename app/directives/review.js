(function() {

	angular.module("product.reviews")

		.directive("productReviews", function() {
			return {
				restrict: "E",
				templateUrl: "app/views/product-reviews.html"
			}
		})
		
		.directive("reviewForm", function() {
			return {
				restrict: "A",
				templateUrl: "app/views/review-form.html"
			}
		});

})();