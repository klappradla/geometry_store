'use strict';
app.directive('gallery', function() {
  return {
    restrict: 'E',
    templateUrl: 'partials/product-gallery.html',
    controller: 'GalleryController',
    controllerAs: 'gallery'
  }
})