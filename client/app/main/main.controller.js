'use strict';

angular.module('blogApp')
    .controller('MainCtrl', function ($scope, $http) {

        $http.get('/api/post/all').success(function (posts) {
            $scope.posts = posts;
        });

        $scope.addThing = function () {
            if ($scope.newThing === '') {
                return;
            }
            $http.post('/api/things', { name: $scope.newThing });
            $scope.newThing = '';
        };

        $scope.deleteThing = function (thing) {
            $http.delete('/api/things/' + thing._id);
        };
    });
