'use strict';

angular.module('employee.route', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'modules/employee/employee.html',
            controller: 'EmployeeCtrl'
        });
    }])
