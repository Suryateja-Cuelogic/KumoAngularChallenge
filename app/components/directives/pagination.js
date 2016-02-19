"use strict";

angular.module("pagination.directive", [])
    .directive("pagination", [pagination]);

function pagination() {

    return {
        restrict: 'E',
        scope: {
            'displayList': '='
        },
        templateUrl: 'common-views/pagination.html',
        link: function(scope, element, attrs) {

            var rowsPerPage = 5,
                sliceStart,
                sliceEnd,
                employeeData = [];

            employeeData = scope.displayList;
            scope.currentPage = 1;
            scope.disablePrev = true;

            if (scope.displayList.length > rowsPerPage) {
                scope.paginationSet = Math.ceil(scope.displayList.length / rowsPerPage);
            } else {
                scope.paginationSet = 1;
            }

            scope.displayList = employeeData.slice(0, rowsPerPage);

            scope.paginateData = function(pageNum, btnType) {

                if (btnType == 'prev') {
                    scope.currentPage = pageNum - 1;
                    sliceStart = scope.currentPage * rowsPerPage - rowsPerPage;
                    sliceEnd = scope.currentPage * rowsPerPage;

                    scope.disablePrev = (scope.currentPage == 1) ? true : false;
                    scope.disableNext = (scope.currentPage == scope.paginationSet) ? true : false;

                } else{

                    scope.currentPage = pageNum + 1;
                    sliceStart = scope.currentPage * rowsPerPage - rowsPerPage;
                    sliceEnd = sliceStart + rowsPerPage;

                    scope.disablePrev = (scope.currentPage == 1) ? true : false;
                    scope.disableNext = (scope.currentPage == scope.paginationSet) ? true : false;
                }

                scope.displayList = employeeData.slice(sliceStart, sliceEnd);
            }

            scope.getNumber = function(num) {
                return new Array(num);
            }

        }
    }
}
