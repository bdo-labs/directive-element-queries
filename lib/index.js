
/**
 * Module dependencies.
 */

var _ = require('lodash/lodash');

/**
 * Expose `elementQueries`.
 */

module.exports = elementQueries;

/**
 * Element queries.
 *
 */

function elementQueries($window){
  function link(scope, el, attrs){
    var win = angular.element($window);
    var breakpoints = [];

    // Sort widths ascending

    angular.forEach(scope.breakpoints, function(val, key){
      breakpoints.push([key, val]);
    });
    breakpoints.sort(asc);

    // Current width of element

    scope.getWidth = function(){ return el.parent()[0].offsetWidth; };

    // Watches for changes in the elements width
    // and apply name accordingly

    scope.$watch(scope.getWidth, _.throttle(function(width, prevWidth){
      var iterate = true;
      angular.forEach(breakpoints, function(breakpoint){
        if (iterate && width < breakpoint[1]) {
          if (breakpoint[0] !== attrs.eq) {
            scope.eq = breakpoint[0];
          }
          iterate = false;
        }
      });
    }, 250), true);

    // Re-compute on window-resize

    win.bind('resize', function(){ scope.$apply(); });
  }

  return {
    restrict: 'A',
    scope: {eq: '=', breakpoints: '='},
    link: link
  };
}

/**
 * Ascending sort of array
 *
 * @param {Array} a
 * @param {Array} b
 * @return {Number}
 */

function asc(a, b){
  return a[1] - b[1];
}

