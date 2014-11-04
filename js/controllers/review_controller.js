angular.module("store")
	.controller("ReviewController", function() {
		this.review = {};

		this.addReview = function(product) {
			console.log("hello");
			product.reviews.push(this.review);
			this.review = {};
		};
	});