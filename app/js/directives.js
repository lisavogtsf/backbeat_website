  /**
 * handles the behaviour of flipping card.
 */
var BackbeatDirectives = angular.module('BackbeatDirectives', []);

BackbeatDirectives.directive('flippy', function() {
    return {
      // this directive can function as an HTML element or element attribute
      restrict: 'EA',
      // $elem is the element that will be affected, 
      // $attrs is an object with all the element's attributes
      link: function($scope, $elem, $attrs) {

        var options = {
          flipDuration: ($attrs.flipDuration) ? $attrs.flipDuration : 400,
          timingFunction: 'ease-in-out',
        };

        // setting flip options
        angular.forEach(['flippy-front', 'flippy-back'], function(name) {
          var el = $elem.find(name);
          if (el.length == 1) {
            angular.forEach(['', '-ms-', '-webkit-'], function(prefix) {
              angular.element(el[0]).css(prefix + 'transition', 'all ' + options.flipDuration/1000 + 's ' + options.timingFunction);
            });
          }
        });

        /**
         * behaviour for flipping effect.
         */
        $scope.flip = function() {
          $elem.toggleClass('flipped');
          console.log("Flipped!");
        }

      }
    };
  });