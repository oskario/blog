'use strict';

angular.module('blogApp')
    .directive('post', function () {
        return {
            templateUrl: 'app/post/post.html',
            restrict: 'EA',
            scope: {
                post: '='
            },
            link: function (scope, element, attrs) {
            }
        };
    });