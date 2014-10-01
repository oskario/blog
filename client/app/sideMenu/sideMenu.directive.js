'use strict';

angular.module('blogApp')
  .directive('sideMenu', function () {
    return {
      templateUrl: 'app/sideMenu/sideMenu.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });