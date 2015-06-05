'use strict';
app.directive('reviewForm', function() {
  return {
    restrict: 'E',
    templateUrl: 'partials/review_form.html',
    controller: 'ReviewController',
    controllerAs: 'reviewCtrl'
  }
})