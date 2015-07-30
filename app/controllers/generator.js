
(function() {
    var app = angular.module('TeamGen', []);

    app.controller('MainController', function ($scope) {
        


        $scope.members = [];

        $scope.perTeam = 0;

        $scope.addMember = function () {
            $scope.members.push($scope.newMember);
        }

        $scope.teamNum = 5;

        $scope.generateList = function() {
            $scope.perTeam = members.size / teamNum;
        }

    });
})();



