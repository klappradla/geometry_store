'use strict';
app.directive('productPanels', function() {
  return {
    restrict: 'E',
    templateUrl: 'partials/product_panels.html',
    controller: 'PanelController',
    controllerAs: 'panel'
  }
})