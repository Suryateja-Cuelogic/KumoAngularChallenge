'use strict';

angular.module('log.controller', [])
    .controller('LogCtrl', ['$scope', 'logs', logController]);


function logController($scope, logs) {

    $scope.title = "Employee Logs";

    $scope.displayLogs = function() {

        logs.fetchLogs()
            .then(function(logs) {
                $scope.logs = logs.data.employeeLogs
            })
            .catch(function(error) {
                console.log(error);
            });
    }

}
