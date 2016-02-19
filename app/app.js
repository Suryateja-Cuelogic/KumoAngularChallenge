'use strict';

// Declare app level module which depends on views, and components
angular.module('kumoApp', [
  'ngRoute',
  'employee.controller',
  'employee.route',
  'employee.factory',
  'log.controller',
  'log.route',
  'log.factory',
  'pagination.directive',
  'sorting.filter'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}]);
