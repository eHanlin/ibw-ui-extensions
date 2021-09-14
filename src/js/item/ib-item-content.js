(function() {
    'use strict';

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

        .controller('EditAnswerModalCtrl', function ($scope, $uibModalInstance, question, answerIndex, item, keyboardCode) {

            let KEYBOARD_CODE = keyboardCode();

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

            function _isLatexCmd(key) {
                 return /^\\[a-zA-Z]+$/.test(key);
            }

            angular.extend($scope, {
                question:question,
                answers: question.answers[answerIndex] || [],
                currentFieldProposeAnswers: angular.copy(question.proposeAnswers[answerIndex] || [], []),
                proposeAnswerClassName:`propose-answer-list-${+new Date()}`,
                isDisplayKeyboard:isDisplayKeyboard,
                isLatexAnswer:(question.latexAnswers || [])[answerIndex],

                subjectIds:item.subjectIds,

                onEditedMath: function (answer, index) {
                    $scope.currentFieldProposeAnswers[index] = answer;
                },

                onFocus: function (evt, index) {
                    setInputTarget(index);
                },

                onFocusMathquill: function(mathField, index) {
                    setInputTarget(index);
                    $scope.currentMathField = mathField;
                },

                onMathKey: function(value) {
                    if ($scope.currentMathField) {
                        setTimeout(function(){
                          $scope.currentMathField.focus();
                          if (_isLatexCmd(value)) {
                              $scope.currentMathField.cmd(value);
                          } else {
                              $scope.currentMathField.write(value);
                          }
                        });
                    }
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
                    $uibModalInstance.close({currentFieldProposeAnswers:$scope.currentFieldProposeAnswers, answerIndex:answerIndex, isLatexAnswer:$scope.isLatexAnswer});
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
                        <div>
                          <label>
                          答案格式：
                          </label>
                          <div>
                            <input type="checkbox" ng-checked="isLatexAnswer" ng-model="isLatexAnswer" /> 使用方程式
                          </div>
                        </div>
                        <br>
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
                                <input class="propose-answer-input" type="text" ng-model="currentFieldProposeAnswers[$index]" ng-focus="onFocus($event, $index)" ng-if="!isLatexAnswer" />
                                <ib-mathquill-input answer="currentFieldProposeAnswers[$index]" ng-if="isLatexAnswer" on-edited="onEditedMath(answer, $index)" on-focus="onFocusMathquill(mathField, $index)"></ib-mathquill-input>
                                <button type="button" class="btn btn-default btn-xs" ng-click="onRemoveAnswer($event, $index)">
                                   <i class="glyphicon glyphicon-remove"></i>
                                </button>
                            </li>
                          </ul>
                        </div>
                        <div class="col-sm-6" ng-show="focusInputIndex != null && isDisplayKeyboard()">
                          <div class="row">
                            <ib-mathquill-keyboard ng-if="!isLatexAnswer  && isDisplayKeyboard()" latex="false" subject-ids="subjectIds" on-key="onKeyClick(value)"></ib-mathquill-keyboard>                
                            <ib-mathquill-keyboard ng-if="isLatexAnswer" latex="true" subject-ids="subjectIds" on-key="onMathKey(value)"></ib-mathquill-keyboard>
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

                        question.latexAnswers = question.latexAnswers || [];

                        question.latexAnswers[answerIndex] = result.isLatexAnswer;
                                  
                        let latexAnswers = (question.latexAnswers || []);
                                  
                        for(let index = 0; index < latexAnswers.length; index++) {
                            if (latexAnswers[index] == null) {
                                latexAnswers[index] = false;
                            }     
                        }

                        scope.onAnswerUpdated({
                          result:{
                            questionIndex:questionIndex,
                            proposeAnswers:question.proposeAnswers,
                            latexAnswers:question.latexAnswers
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
