'use strict';

angular.module('log.route', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/logs', {
            templateUrl: 'modules/logs/logs.html',
            controller: 'LogCtrl'
        });
    }])
