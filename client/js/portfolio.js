/**
 * Created by sanil on 8/18/2016.
 */

var portfolio = angular.module("myModule",[])
    .controller("myController", function ($scope, $http) {
        $scope.formData = {};
        $scope.formSubmit = function () {
            console.log('inside'+JSON.stringify($scope.formData));
        };
    });


