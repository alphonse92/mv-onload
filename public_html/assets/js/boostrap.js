angular.module('app', ['com.alphonsegs.mvonload'])
        .controller("mainController", function ($scope, $http) {
            $scope.x = "Text wasnt changed, its bored e.e "
            $scope.callback = function () {
                $scope.x = "Text was changed !! Oh gad im so excited"
            }
        })

