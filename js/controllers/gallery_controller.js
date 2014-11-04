(function() {

	angular.module("store").controller("GalleryController", function() {
		this.current = 0;

		this.setCurrent = function(index) {
			this.current = index || 0;
		};

	});

})();