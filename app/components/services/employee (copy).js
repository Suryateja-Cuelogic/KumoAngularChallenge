"use strict";

angular.module("log.factory", [])
    .factory("logs", ['$http', logsService]);


function logsService($http) {

    var logServiceObj = {};

    function fetchLogs() {

        return $http.get("json/employeeLogs.json");
    }

    logServiceObj.fetchLogs = fetchLogs;

    return logServiceObj;
}
