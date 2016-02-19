"use strict";

angular.module("sorting.filter", [])
    .filter('sorting', [sorting]);

function sorting() {

    return function(input, optional1, optional2) {
        console.log(input)
        console.log(optional1)
        if (!optional1) {
            return input.sort();
        }
        if (optional2) {
            return input.sort(sort(optional1));
        } else {
            return input.reverse(sort(optional1));
        }
    }
}

function sort(property) {
    var sortOrder = 1;
    if (property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function(a, b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}
