(function() {
	angular.module("product.directives")
	
	.controller("GalleryCtrl", function($scope) {
		this.current = $scope.product.images[0];

		this.setCurrent = function(image) {
			this.current = image;
		};
	});

})();