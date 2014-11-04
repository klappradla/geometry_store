angular.module("store")
	.directive("productPanel", function() {
		return {
			restrict: "E",
			templateUrl: "app/views/product-panel.html",
			controller: function() {
				this.tab = 1;

				this.selectTab = function(setTab) {
					this.tab = setTab;
				};

				this.isSelected = function(checkTab) {
					return this.tab === checkTab;
				};
			},
			controllerAs: "panel"
		}
	});