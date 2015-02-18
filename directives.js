/**
 * Created by matias on 17/02/15.
 */
angular.module('cuiz.directives').
    directive('cuizQuestion', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/cuiz-question.html',
            controller: 'AppController'
        };
    })
