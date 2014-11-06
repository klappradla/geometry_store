(function(){

	angular.module("product.panel")
	
		.directive("productPanel", function() {
			return {
				restrict: "E",
				templateUrl: "app/views/product-panel.html",
				controller: "panelCtrl",
				controllerAs: "panel"
			}
		});

})();