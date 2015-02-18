/**
 * Created by matias on 17/02/15.
 */
angular.module('cuiz.controllers').
    controller('AppController', ['$scope', function ($scope) {
        $scope.quiz = new Quiz('Test Quiz', [
            {
                description: '¿Pregunta 1?',
                answers: [
                    {
                        description: 'Si',
                        correct: false
                    },
                    {
                        description: 'No',
                        correct: true
                    }
                ]
            }
        ]);
    }]);

var Quiz = function(title, questions) {
    this.title = title;
    this.currentQuestionNumber = 0;
    this.questions = questions;
};

Quiz.prototype.currentQuestion = function() {
    return this.questions[this.currentQuestionNumber];
};
