"use strict";

angular.module("employee.factory", [])
    .factory("employee", ['$http', employeeService]);


function employeeService($http) {

    var empServiceObj = {};

    function fetchEmployees() {

        return $http.get("json/employee.json");
    }

    empServiceObj.fetchEmployees = fetchEmployees;

    return empServiceObj;
}
