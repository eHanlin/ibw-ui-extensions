(function() {
    'use strict';

    var KEYBOARD_CODE = {
      "J-EN": [
        {
          "subject": "J-EN",
          "value": "\u00d7",
          "symbol": "\u00d7",
          "unicode_value": "00D7"
        }
      ],
      "J-MA": [
        {
          "subject": "J-MA",
          "value": "\uff0d",
          "symbol": "\uff0d",
          "unicode_value": "FF0D"
        },
        {
          "subject": "J-MA",
          "value": "\uff0b",
          "symbol": "\uff0b",
          "unicode_value": "002B"
        },
        {
          "subject": "J-MA",
          "value": "\u00b1",
          "symbol": "\u00b1",
          "unicode_value": "00B1"
        },
        {
          "subject": "J-MA",
          "value": "\uff1d",
          "symbol": "\uff1d",
          "unicode_value": "003D"
        },
        {
          "subject": "J-MA",
          "value": "\uff1e",
          "symbol": "\uff1e",
          "unicode_value": "FF1E"
        },
        {
          "subject": "J-MA",
          "value": "\uff1c",
          "symbol": "\uff1c",
          "unicode_value": "FF1C"
        },
        {
          "subject": "J-MA",
          "value": "\u03c0",
          "symbol": "\u03c0",
          "unicode_value": "03C0"
        },
        {
          "subject": "J-MA",
          "value": "\u2220",
          "symbol": "\u2220",
          "unicode_value": "2220"
        },
        {
          "subject": "J-MA",
          "value": "\u00b0",
          "symbol": "\u00b0",
          "unicode_value": "00B0"
        },
        {
          "subject": "J-MA",
          "value": "\uff5c",
          "symbol": "\uff5c",
          "unicode_value": "007C"
        },
        {
          "subject": "J-MA",
          "value": "\u25ef",
          "symbol": "\u25ef",
          "unicode_value": "25EF"
        },
        {
          "subject": "J-MA",
          "value": "\u2573",
          "symbol": "\u2573",
          "unicode_value": "2573"
        },
        {
          "subject": "J-MA",
          "value": "\u2260",
          "symbol": "\u2260",
          "unicode_value": "2260"
        },
        {
          "subject": "J-MA",
          "value": "\u2266",
          "symbol": "\u2266",
          "unicode_value": "2266"
        },
        {
          "subject": "J-MA",
          "value": "\u2267",
          "symbol": "\u2267",
          "unicode_value": "2267"
        },
        {
          "subject": "J-MA",
          "value": "\u224c",
          "symbol": "\u224c",
          "unicode_value": "224C"
        },
        {
          "subject": "J-MA",
          "value": "\u25b3",
          "symbol": "\u25b3",
          "unicode_value": "25B3"
        },
        {
          "subject": "J-MA",
          "value": "\u22a5",
          "symbol": "\u22a5",
          "unicode_value": "22A5"
        },
        {
          "subject": "J-MA",
          "value": "/",
          "symbol": "/",
          "unicode_value": "FF0F"
        },
        {
          "subject": "J-MA",
          "value": "//",
          "symbol": "\u2afd",
          "unicode_value": "2AFD"
        },
        {
          "subject": "J-MA",
          "value": "///",
          "symbol": "\u2afb",
          "unicode_value": "2AFB"
        },
        {
          "subject": "J-MA",
          "value": "\u2113",
          "symbol": "\u2113",
          "unicode_value": "2113"
        },
        {
          "subject": "J-MA",
          "value": "\u2192",
          "symbol": "\u2192",
          "unicode_value": "2192"
        }
      ],
      "J-PY": [
        {
          "subject": "J-PY",
          "value": "\u00b0",
          "symbol": "\u00b0",
          "unicode_value": "00B0"
        },
        {
          "subject": "J-PY",
          "value": "\uff1e",
          "symbol": "\uff1e",
          "unicode_value": "FF1E"
        },
        {
          "subject": "J-PY",
          "value": "\uff1c",
          "symbol": "\uff1c",
          "unicode_value": "FF1C"
        },
        {
          "subject": "J-PY",
          "value": "\uff0b",
          "symbol": "\uff0b",
          "unicode_value": "FF0B"
        },
        {
          "subject": "J-PY",
          "value": "\uff0d",
          "symbol": "\uff0d",
          "unicode_value": "FF0D"
        },
        {
          "subject": "J-PY",
          "value": "\uff1d",
          "symbol": "\uff1d",
          "unicode_value": "003D"
        },
        {
          "subject": "J-PY",
          "value": "\u00d7",
          "symbol": "\u00d7",
          "unicode_value": "00D7"
        },
        {
          "subject": "J-PY",
          "value": "\u2192",
          "symbol": "\u2192",
          "unicode_value": "2192"
        }
      ],
      "J-GE": [
        {
          "subject": "J-GE",
          "value": "\u00b0",
          "symbol": "\u00b0",
          "unicode_value": "00B0"
        }
      ],
      "J-PC": [
        {
          "subject": "J-PC",
          "value": "\u02c7",
          "symbol": "\u02c7",
          "unicode_value": "02C7"
        },
        {
          "subject": "J-PC",
          "value": "\u02cb",
          "symbol": "\u02cb",
          "unicode_value": "02CB"
        },
        {
          "subject": "J-PC",
          "value": "\u02ca",
          "symbol": "\u02ca",
          "unicode_value": "02CA"
        },
        {
          "subject": "J-PC",
          "value": "\u2022",
          "symbol": "\u2022",
          "unicode_value": "2022"
        },
        {
          "subject": "J-PC",
          "value": "\u25ef",
          "symbol": "\u25ef",
          "unicode_value": "25EF"
        },
        {
          "subject": "J-PC",
          "value": "\u2573",
          "symbol": "\u2573",
          "unicode_value": "2573"
        },
        {
          "subject": "J-PC",
          "value": "\u22ef",
          "symbol": "\u22ef",
          "unicode_value": "22EF"
        },
        {
          "subject": "J-PC",
          "value": "\uff0c",
          "symbol": "\uff0c",
          "unicode_value": "FF0C"
        },
        {
          "subject": "J-PC",
          "value": "\u3002",
          "symbol": "\u3002",
          "unicode_value": "3002"
        },
        {
          "subject": "J-PC",
          "value": "\uff1b",
          "symbol": "\uff1b",
          "unicode_value": "037E"
        },
        {
          "subject": "J-PC",
          "value": "\uff1f",
          "symbol": "\uff1f",
          "unicode_value": "FE5"
        },
        {
          "subject": "J-PC",
          "value": "\u300c",
          "symbol": "\u300c",
          "unicode_value": "300C"
        },
        {
          "subject": "J-PC",
          "value": "\u300d",
          "symbol": "\u300d",
          "unicode_value": "300D"
        },
        {
          "subject": "J-PC",
          "value": "\u2014",
          "symbol": "\u2014",
          "unicode_value": "FE58"
        },
        {
          "subject": "J-PC",
          "value": "\u3105",
          "symbol": "\u3105",
          "unicode_value": "3105"
        },
        {
          "subject": "J-PC",
          "value": "\u3106",
          "symbol": "\u3106",
          "unicode_value": "3106"
        },
        {
          "subject": "J-PC",
          "value": "\u3107",
          "symbol": "\u3107",
          "unicode_value": "3107"
        },
        {
          "subject": "J-PC",
          "value": "\u3108",
          "symbol": "\u3108",
          "unicode_value": "3108"
        },
        {
          "subject": "J-PC",
          "value": "\u3109",
          "symbol": "\u3109",
          "unicode_value": "3109"
        },
        {
          "subject": "J-PC",
          "value": "\u310a",
          "symbol": "\u310a",
          "unicode_value": "310A"
        },
        {
          "subject": "J-PC",
          "value": "\u310b",
          "symbol": "\u310b",
          "unicode_value": "310B"
        },
        {
          "subject": "J-PC",
          "value": "\u310c",
          "symbol": "\u310c",
          "unicode_value": "310C"
        },
        {
          "subject": "J-PC",
          "value": "\u310d",
          "symbol": "\u310d",
          "unicode_value": "310D"
        },
        {
          "subject": "J-PC",
          "value": "\u310e",
          "symbol": "\u310e",
          "unicode_value": "310E"
        },
        {
          "subject": "J-PC",
          "value": "\u310f",
          "symbol": "\u310f",
          "unicode_value": "310F"
        },
        {
          "subject": "J-PC",
          "value": "\u3110",
          "symbol": "\u3110",
          "unicode_value": "3110"
        },
        {
          "subject": "J-PC",
          "value": "\u3111",
          "symbol": "\u3111",
          "unicode_value": "3111"
        },
        {
          "subject": "J-PC",
          "value": "\u3112",
          "symbol": "\u3112",
          "unicode_value": "3112"
        },
        {
          "subject": "J-PC",
          "value": "\u3113",
          "symbol": "\u3113",
          "unicode_value": "3113"
        },
        {
          "subject": "J-PC",
          "value": "\u3114",
          "symbol": "\u3114",
          "unicode_value": "3114"
        },
        {
          "subject": "J-PC",
          "value": "\u3115",
          "symbol": "\u3115",
          "unicode_value": "3115"
        },
        {
          "subject": "J-PC",
          "value": "\u3116",
          "symbol": "\u3116",
          "unicode_value": "3116"
        },
        {
          "subject": "J-PC",
          "value": "\u3117",
          "symbol": "\u3117",
          "unicode_value": "3117"
        },
        {
          "subject": "J-PC",
          "value": "\u3118",
          "symbol": "\u3118",
          "unicode_value": "3118"
        },
        {
          "subject": "J-PC",
          "value": "\u3119",
          "symbol": "\u3119",
          "unicode_value": "3119"
        },
        {
          "subject": "J-PC",
          "value": "\u311a",
          "symbol": "\u311a",
          "unicode_value": "311A"
        },
        {
          "subject": "J-PC",
          "value": "\u311b",
          "symbol": "\u311b",
          "unicode_value": "311B"
        },
        {
          "subject": "J-PC",
          "value": "\u311c",
          "symbol": "\u311c",
          "unicode_value": "311C"
        },
        {
          "subject": "J-PC",
          "value": "\u311d",
          "symbol": "\u311d",
          "unicode_value": "311D"
        },
        {
          "subject": "J-PC",
          "value": "\u311e",
          "symbol": "\u311e",
          "unicode_value": "311E"
        },
        {
          "subject": "J-PC",
          "value": "\u311f",
          "symbol": "\u311f",
          "unicode_value": "311F"
        },
        {
          "subject": "J-PC",
          "value": "\u3120",
          "symbol": "\u3120",
          "unicode_value": "3120"
        },
        {
          "subject": "J-PC",
          "value": "\u3121",
          "symbol": "\u3121",
          "unicode_value": "3121"
        },
        {
          "subject": "J-PC",
          "value": "\u3122",
          "symbol": "\u3122",
          "unicode_value": "3122"
        },
        {
          "subject": "J-PC",
          "value": "\u3123",
          "symbol": "\u3123",
          "unicode_value": "3123"
        },
        {
          "subject": "J-PC",
          "value": "\u3124",
          "symbol": "\u3124",
          "unicode_value": "3124"
        },
        {
          "subject": "J-PC",
          "value": "\u3125",
          "symbol": "\u3125",
          "unicode_value": "3125"
        },
        {
          "subject": "J-PC",
          "value": "\u3126",
          "symbol": "\u3126",
          "unicode_value": "3126"
        },
        {
          "subject": "J-PC",
          "value": "\u3127",
          "symbol": "\u3127",
          "unicode_value": "3127"
        },
        {
          "subject": "J-PC",
          "value": "\u3128",
          "symbol": "\u3128",
          "unicode_value": "3128"
        },
        {
          "subject": "J-PC",
          "value": "\u3129",
          "symbol": "\u3129",
          "unicode_value": "3129"
        }
      ]
    };

    angular.module('ibw.item.extensions')

        .directive('ibItemContent', function ($rootScope, $http, $sce) {

            return {
                restrict: 'A',
                replace: true,
                scope: {
                    item: '=ibItemContent',
                    onAnswerUpdated:'&'
                },
                templateUrl: 'src/js/item/ib-item-content.tpl.html',
                link: function (scope, iElement, iAttrs, ctrls) {
                    scope.content = scope.item.content;
                    scope.trustAsHtml = function(string) {
                        return $sce.trustAsHtml(string);
                    };
                }
            };
        })

        .directive('ibQuestionContent', function ($rootScope, $http, $sce) {

            return {
                restrict: 'E',
                replace: true,
                scope: {
                    question: '=',
                    questionIndex: '@',
                    item: '=',
                    onAnswerUpdated:'&'
                },
                templateUrl: 'src/js/item/ib-question-content.tpl.html',
                link: function (scope, iElement, iAttrs, ctrls) {
                    scope.trustAsHtml = function(string) {
                        return $sce.trustAsHtml(string);
                    };
                }
            };
        })

        .directive('ibKeyboard', function (){

            return {
                restrict: 'E',
                replace: true,
                scope: {
                    subjectIds: '=',
                    onKeyClick: '&'
                },
                templateUrl: 'src/js/item/ib-keyboard.tpl.html',
                link: function (scope, iElement, iAttrs, ctrls) {
                    scope.KEYBOARD_CODE = KEYBOARD_CODE;
                }

            };
        })

        .controller('EditAnswerModalCtrl', function ($scope, $uibModalInstance, question, answerIndex, item) {

            function setInputTarget (index) {
                $scope.focusInputIndex = index;
            }

            function removeInputTarget (index) {
                if (index === $scope.focusInputIndex) {
                    $scope.focusInputIndex = null;
                } else {
                    refreshFocusIndexBy(index);
                }
            }

            function insertTextToInput (key) {
                var focusInputIndex = $scope.focusInputIndex;

                if (focusInputIndex != null) {
                    var focusInput = $(`.${$scope.proposeAnswerClassName} input[type='text'].propose-answer-input`).get(focusInputIndex);
                    var selectionStart = focusInput.selectionStart;
                    var text = focusInput.value;
                    var frontText = text.substring(0, selectionStart);
                    var backText = text.substring(selectionStart, text.length);
                    var value = frontText + key + backText;
                    focusInput.value = value;
                    var movedPos = selectionStart + key.length;
                    focusInput.selectionStart = movedPos;
                    focusInput.selectionEnd = movedPos;
                    $scope.currentFieldProposeAnswers[focusInputIndex] = value;
                }
            }

            function refreshFocusIndexBy(index) {
                var focusInputIndex = $scope.focusInputIndex;
                if ( index < focusInputIndex ) $scope.focusInputIndex -= 1;
            }

            function isDisplayKeyboard() {
                var subjectIds = item.subjectIds;
                var result = false;

                if (subjectIds.length)
                  result = subjectIds.map((subjectId)=> (KEYBOARD_CODE[subjectId]||[]).length).reduce((value1, value2)=> value1 + value2) > 0;

                return result;
            }

            angular.extend($scope, {
                question:question,
                answers: question.answers[answerIndex] || [],
                currentFieldProposeAnswers: angular.copy(question.proposeAnswers[answerIndex] || [], []),
                proposeAnswerClassName:`propose-answer-list-${+new Date()}`,
                isDisplayKeyboard:isDisplayKeyboard,

                subjectIds:item.subjectIds,

                onFocus: function (evt, index) {
                    setInputTarget(index);
                },

                onKeyClick: function (value) {
                    insertTextToInput(value);
                },

                onAddAnswer: function () {
                    $scope.currentFieldProposeAnswers.push('');
                },

                onRemoveAnswer: function ($event, index) {
                    $scope.currentFieldProposeAnswers.splice(index, 1);
                    removeInputTarget(index);
                },

                onCancel: function () {
                    $uibModalInstance.dismiss('cancel');
                },

                onSubmit: function () {
                    $uibModalInstance.close({currentFieldProposeAnswers:$scope.currentFieldProposeAnswers, answerIndex:answerIndex});
                }
            });
        })

        .factory('editAnswerDialog', function ($uibModal, $interpolate) {

            return function (question, answerIndex, item) {
                var modalInstance;
                var startSymbol = $interpolate.startSymbol();
                var endSymbol = $interpolate.endSymbol();

                modalInstance = $uibModal.open({
                    template:`
                    <div class="modal-header">
                        <h3 class="modal-title">編輯答案</h3>
                    </div>
                    <div class="modal-body">
                        <label>
                          答案欄：
                        </label>
                        <ul>
                            <li ng-repeat="answer in answers">
                                ${startSymbol}answer${endSymbol}
                            </li>
                        </ul>
                        <label>
                          建議答案：
                        </label>
                        <div class="clearfix"></div>
                        <div class="col-sm-6">
                          <ul class="row ${startSymbol}proposeAnswerClassName${endSymbol}">
                            <li ng-repeat="answer in currentFieldProposeAnswers track by $index">
                                <input class="propose-answer-input" type="text" ng-model="currentFieldProposeAnswers[$index]" ng-focus="onFocus($event, $index)" />
                                <button type="button" class="btn btn-default btn-xs" ng-click="onRemoveAnswer($event, $index)">
                                   <i class="glyphicon glyphicon-remove"></i>
                                </button>
                            </li>
                          </ul>
                        </div>
                        <div class="col-sm-6" ng-show="focusInputIndex != null && isDisplayKeyboard()">
                          <div class="row">
                            <ib-keyboard subject-ids="subjectIds" on-key-click="onKeyClick(keyValue)"></ib-keyboard>
                          </div>
                        </div>
                        <div class="clearfix"></div>
                        <button type="button" class="btn btn-default btn-xs" ng-click="onAddAnswer()">
                           新增
                           <i class="glyphicon glyphicon-plus"></i>
                        </button>
                    
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-primary" type="button" ng-click="onSubmit()">確定</button>
                        <button class="btn btn-warning" type="button" ng-click="onCancel()">取消</button>
                    </div>

                    `,
                    controller: 'EditAnswerModalCtrl',
                    resolve: {
                        question: function () {
                            return question;
                        },
                        answerIndex: function () {
                             return  answerIndex;
                        },
                        item: function () {
                             return item;
                        }
                    }
                });

                return modalInstance;
            };
        })

        .directive('answerarea', function (editAnswerDialog){

            var _normalizeFieldAnswers = function(answers, fieldSize) {
                for (var index = 0; index < fieldSize; index++) {
                    if (!answers[index]) answers[index] = [];
                }
                return answers;
            };

            var _buildEditable = function(scope, iElement, questionIndex, answerIndex, question, item) {
                iElement.on('click', function () {
                    editAnswerDialog(question, answerIndex, item).result.then(function (result) {
                        var propseFieldAnswers = result.currentFieldProposeAnswers;
                        var answers = question.answers;

                        question.proposeAnswers = _normalizeFieldAnswers(question.proposeAnswers, answers.length);
                        question.proposeAnswers[answerIndex] = propseFieldAnswers;

                        scope.onAnswerUpdated({
                          result:{
                            questionIndex:questionIndex,
                            proposeAnswers:question.proposeAnswers
                          }
                        });
                    });
                });
            };

            return {
                restrict: 'C',
                scope: {
                    editable:'@',
                    answerIndex:'@',
                    question: '=',
                    questionIndex: '@',
                    onAnswerUpdated:'&',
                    item: '='
                },
                link:function (scope, iElement) {
                    var {question, questionIndex, answerIndex, item} = scope;

                    if (scope.editable) _buildEditable(scope, iElement, Number(questionIndex), answerIndex, question, item);
                }
            };
        })

        .filter('decorateQuestionContent', function () {

            var ANSWER_AREA_TAG_REGEXP = /<span[^>]+answerarea[^>]+>/g;

            var _decorateAttributes = function (html, answerIndex, attrs) {
               var attrTexts = [];

               for (var name in attrs) attrTexts.push(`${_.kebabCase(name)}=${attrs[name]}`);

               return html.replace(/(>)/g, ` answer-index=${answerIndex} ${attrTexts.join(' ')} on-answer-updated="onAnswerUpdated({result:result})" $&`);
            };

            return function(html, attrs) {
                var index = -1;

                return html.replace(ANSWER_AREA_TAG_REGEXP, originalHtml => {
                    index++;
                    return _decorateAttributes(originalHtml, index, attrs)
                });
            };
        })
    ;
})();
