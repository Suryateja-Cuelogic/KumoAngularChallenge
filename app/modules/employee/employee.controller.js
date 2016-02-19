'use strict';

angular.module('employee.controller', [])
    .controller('EmployeeCtrl', ['$scope', 'employee', employeeController]);


function employeeController($scope, employee) {

    $scope.employees = [];
    $scope.employees1 = [];
    $scope.title = "Employee Details";

    $scope.displayEmployeeDetails = function() {

        employee.fetchEmployees()
            .then(function(employee) {
                $scope.employees = employee.data.employeeData;
               // $scope.employees1 = employee.data.employeeData;
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    $scope.deleteEmployee = function(empid) {

        if (confirm("Are you sure to delete this employee ?")) {
            $scope.employees = $scope.employees.filter(function(obj) {
                return obj.Id !== empid;
            });
        }
    }
}
