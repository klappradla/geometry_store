'use strict';
app.controller('GalleryController', function() {
  this.current = 0;

  this.setCurrent = function(index) {
    if (index === null) {
      index = 0;
    }
    this.current = index;
  };
});