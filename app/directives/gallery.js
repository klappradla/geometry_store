angular.module("store")
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