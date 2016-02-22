'use strict';

angular.module('employee.controller', [])
    .controller('EmployeeCtrl', ['$scope', 'employee', employeeController]);


function employeeController($scope, employee) {

   // $scope.employees = [];
    $scope.title = "Employee Details";
    $scope.ctrlTest = "Controller Test";

    $scope.displayEmployeeDetails = function() {

        employee.fetchEmployees()
            .then(function(employee) {
                $scope.employees = $scope.employeesMain = employee.data.employeeData;
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    $scope.deleteEmployee = function(empid) {

        if (confirm("Are you sure to delete this employee ?")) {
            $scope.employees = $scope.employeesMain = $scope.employeesMain.filter(function(obj) {
                return obj.Id !== empid;
            });
            $scope.employeesMainLength = $scope.employeesMain.length;
        }
    }
}
