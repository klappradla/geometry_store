(function() {
	angular.module("product.directives")
	
	.controller("GalleryCtrl", function() {
		this.current = 0;

		this.setCurrent = function(index) {
			this.current = index || 0;
		};
	});

})();