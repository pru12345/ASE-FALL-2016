/**
 * Created by pru on 10/26/2016.
 */

var app = angular.module('faceplus', []);
app.controller('face', function($scope, $http) {
    $scope.genrate = function () {
        var api ="http://127.0.0.1:8081/gd/"+$scope.search
        $http.get(api).success(function (data) {
            $scope.res = body.age.value;
            $scope.res1 = body.gender.value;
            $scope.res2 = body.url;
            document.getElementById("result").src =res2 ;
        })
    }
});

