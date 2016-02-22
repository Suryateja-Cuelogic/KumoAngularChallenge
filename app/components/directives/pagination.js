"use strict";

angular.module("pagination.directive", [])
    .directive("pagination", [pagination]);

function pagination() {

    return {
        restrict: 'E',
        scope: {
            'displayList': '=',
            'nonDisplayList': '=?',
            'employeesLength': '=?'
        },
        templateUrl: 'common-views/pagination.html',
        link: function(scope, element, attrs) {

            function displayEmpTable() {

                var rowsPerPage = 5,
                    sliceStart,
                    sliceEnd,
                    pageNumber;

                scope.currentPage = scope.currentPage || 1;
                scope.disablePrev = true;

                if (!scope.nonDisplayList) {
                    scope.nonDisplayList = scope.displayList;
                }

                if (scope.nonDisplayList.length > rowsPerPage) {
                    scope.paginationSet = Math.ceil(scope.nonDisplayList.length / rowsPerPage);
                } else {
                    scope.paginationSet = 1;
                }
                
                if(scope.currentPage === 1) {
                	scope.displayList = scope.nonDisplayList.slice(0, rowsPerPage);
                } else{
                	pageNumber = (scope.currentPage - 1 == scope.paginationSet) ? scope.currentPage - 2 : scope.currentPage - 1;
                	scope.paginateData(pageNumber, 'current')
                }
                
                scope.paginateData = function(pageNum, btnType) {

                    if (btnType == 'prev') {
                        scope.currentPage = pageNum - 1;
                        sliceStart = scope.currentPage * rowsPerPage - rowsPerPage;
                        sliceEnd = scope.currentPage * rowsPerPage;

                        scope.disablePrev = (scope.currentPage == 1) ? true : false;
                        scope.disableNext = (scope.currentPage == scope.paginationSet) ? true : false;

                    } else {
                        scope.currentPage = pageNum + 1;
                        sliceStart = scope.currentPage * rowsPerPage - rowsPerPage;
                        sliceEnd = sliceStart + rowsPerPage;

                        scope.disablePrev = (scope.currentPage == 1) ? true : false;
                        scope.disableNext = (scope.currentPage == scope.paginationSet) ? true : false;
                    }

                    scope.displayList = scope.nonDisplayList.slice(sliceStart, sliceEnd);
                }

                scope.getNumber = function(num) {
                    return new Array(num);
                }

            }

            displayEmpTable();

            scope.$watch('employeesLength', function(newVal) {
                displayEmpTable();
            });

        }
    }
}
