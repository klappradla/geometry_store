(function() {
	angular.module("product.reviews")
	
	.controller("ReviewController", function() {
		this.review = {};

		this.addReview = function(product) {
			this.review.createdAt = Date.now();
			product.reviews.push(this.review);
			this.review = {};
		};
	});

})();