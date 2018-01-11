(function(){ 'use strict';

(function () {

  'use strict';

  angular.module('ibw.ui.extensions', ['ibw.item.extensions', 'ibw.common.extensions', 'ngSanitize', 'angular-bind-html-compile', 'ui.bootstrap']);
})();

(function () {

  'use strict';

  angular.module('ibw.common.extensions', []);
})();

(function () {

  'use strict';

  angular.module('ibw.common.extensions').filter('answerKey', function () {
    return function (answer, answeringMethod) {

      if (answeringMethod != null && (answeringMethod != "單一選擇題" || answeringMethod != "多重選擇題")) return answer;

      switch (answer) {
        case '1':
          return 'A';
        case '2':
          return 'B';
        case '3':
          return 'C';
        case '4':
          return 'D';
        case '5':
          return 'E';
        case '6':
          return 'F';
        case '7':
          return 'G';
        case '8':
          return 'H';
        case '9':
          return 'I';
        default:
          return answer;
      }
    };
  });
})();

(function () {

  'use strict';

  angular.module('ibw.item.extensions', []);
})();

(function () {
  'use strict';

  var KEYBOARD_CODE = {
    "J-EN": [{
      "subject": "J-EN",
      "value": '\xD7',
      "symbol": '\xD7',
      "unicode_value": "00D7"
    }],
    "J-MA": [{
      "subject": "J-MA",
      "value": '\uFF0D',
      "symbol": '\uFF0D',
      "unicode_value": "FF0D"
    }, {
      "subject": "J-MA",
      "value": '\uFF0B',
      "symbol": '\uFF0B',
      "unicode_value": "002B"
    }, {
      "subject": "J-MA",
      "value": '\xB1',
      "symbol": '\xB1',
      "unicode_value": "00B1"
    }, {
      "subject": "J-MA",
      "value": '\uFF1D',
      "symbol": '\uFF1D',
      "unicode_value": "003D"
    }, {
      "subject": "J-MA",
      "value": '\uFF1E',
      "symbol": '\uFF1E',
      "unicode_value": "FF1E"
    }, {
      "subject": "J-MA",
      "value": '\uFF1C',
      "symbol": '\uFF1C',
      "unicode_value": "FF1C"
    }, {
      "subject": "J-MA",
      "value": '\u03C0',
      "symbol": '\u03C0',
      "unicode_value": "03C0"
    }, {
      "subject": "J-MA",
      "value": '\u2220',
      "symbol": '\u2220',
      "unicode_value": "2220"
    }, {
      "subject": "J-MA",
      "value": '\xB0',
      "symbol": '\xB0',
      "unicode_value": "00B0"
    }, {
      "subject": "J-MA",
      "value": '\uFF5C',
      "symbol": '\uFF5C',
      "unicode_value": "007C"
    }, {
      "subject": "J-MA",
      "value": '\u25EF',
      "symbol": '\u25EF',
      "unicode_value": "25EF"
    }, {
      "subject": "J-MA",
      "value": '\u2573',
      "symbol": '\u2573',
      "unicode_value": "2573"
    }, {
      "subject": "J-MA",
      "value": '\u2260',
      "symbol": '\u2260',
      "unicode_value": "2260"
    }, {
      "subject": "J-MA",
      "value": '\u2266',
      "symbol": '\u2266',
      "unicode_value": "2266"
    }, {
      "subject": "J-MA",
      "value": '\u2267',
      "symbol": '\u2267',
      "unicode_value": "2267"
    }, {
      "subject": "J-MA",
      "value": '\u224C',
      "symbol": '\u224C',
      "unicode_value": "224C"
    }, {
      "subject": "J-MA",
      "value": '\u25B3',
      "symbol": '\u25B3',
      "unicode_value": "25B3"
    }, {
      "subject": "J-MA",
      "value": '\u22A5',
      "symbol": '\u22A5',
      "unicode_value": "22A5"
    }, {
      "subject": "J-MA",
      "value": "/",
      "symbol": "/",
      "unicode_value": "FF0F"
    }, {
      "subject": "J-MA",
      "value": "//",
      "symbol": '\u2AFD',
      "unicode_value": "2AFD"
    }, {
      "subject": "J-MA",
      "value": "///",
      "symbol": '\u2AFB',
      "unicode_value": "2AFB"
    }, {
      "subject": "J-MA",
      "value": '\u2113',
      "symbol": '\u2113',
      "unicode_value": "2113"
    }, {
      "subject": "J-MA",
      "value": '\u2192',
      "symbol": '\u2192',
      "unicode_value": "2192"
    }],
    "J-PY": [{
      "subject": "J-PY",
      "value": '\xB0',
      "symbol": '\xB0',
      "unicode_value": "00B0"
    }, {
      "subject": "J-PY",
      "value": '\uFF1E',
      "symbol": '\uFF1E',
      "unicode_value": "FF1E"
    }, {
      "subject": "J-PY",
      "value": '\uFF1C',
      "symbol": '\uFF1C',
      "unicode_value": "FF1C"
    }, {
      "subject": "J-PY",
      "value": '\uFF0B',
      "symbol": '\uFF0B',
      "unicode_value": "FF0B"
    }, {
      "subject": "J-PY",
      "value": '\uFF0D',
      "symbol": '\uFF0D',
      "unicode_value": "FF0D"
    }, {
      "subject": "J-PY",
      "value": '\uFF1D',
      "symbol": '\uFF1D',
      "unicode_value": "003D"
    }, {
      "subject": "J-PY",
      "value": '\xD7',
      "symbol": '\xD7',
      "unicode_value": "00D7"
    }, {
      "subject": "J-PY",
      "value": '\u2192',
      "symbol": '\u2192',
      "unicode_value": "2192"
    }],
    "J-GE": [{
      "subject": "J-GE",
      "value": '\xB0',
      "symbol": '\xB0',
      "unicode_value": "00B0"
    }],
    "J-PC": [{
      "subject": "J-PC",
      "value": '\u02C7',
      "symbol": '\u02C7',
      "unicode_value": "02C7"
    }, {
      "subject": "J-PC",
      "value": '\u02CB',
      "symbol": '\u02CB',
      "unicode_value": "02CB"
    }, {
      "subject": "J-PC",
      "value": '\u02CA',
      "symbol": '\u02CA',
      "unicode_value": "02CA"
    }, {
      "subject": "J-PC",
      "value": '\u2022',
      "symbol": '\u2022',
      "unicode_value": "2022"
    }, {
      "subject": "J-PC",
      "value": '\u25EF',
      "symbol": '\u25EF',
      "unicode_value": "25EF"
    }, {
      "subject": "J-PC",
      "value": '\u2573',
      "symbol": '\u2573',
      "unicode_value": "2573"
    }, {
      "subject": "J-PC",
      "value": '\u22EF',
      "symbol": '\u22EF',
      "unicode_value": "22EF"
    }, {
      "subject": "J-PC",
      "value": '\uFF0C',
      "symbol": '\uFF0C',
      "unicode_value": "FF0C"
    }, {
      "subject": "J-PC",
      "value": '\u3002',
      "symbol": '\u3002',
      "unicode_value": "3002"
    }, {
      "subject": "J-PC",
      "value": '\uFF1B',
      "symbol": '\uFF1B',
      "unicode_value": "037E"
    }, {
      "subject": "J-PC",
      "value": '\uFF1F',
      "symbol": '\uFF1F',
      "unicode_value": "FE5"
    }, {
      "subject": "J-PC",
      "value": '\u300C',
      "symbol": '\u300C',
      "unicode_value": "300C"
    }, {
      "subject": "J-PC",
      "value": '\u300D',
      "symbol": '\u300D',
      "unicode_value": "300D"
    }, {
      "subject": "J-PC",
      "value": '\u2014',
      "symbol": '\u2014',
      "unicode_value": "FE58"
    }, {
      "subject": "J-PC",
      "value": '\u3105',
      "symbol": '\u3105',
      "unicode_value": "3105"
    }, {
      "subject": "J-PC",
      "value": '\u3106',
      "symbol": '\u3106',
      "unicode_value": "3106"
    }, {
      "subject": "J-PC",
      "value": '\u3107',
      "symbol": '\u3107',
      "unicode_value": "3107"
    }, {
      "subject": "J-PC",
      "value": '\u3108',
      "symbol": '\u3108',
      "unicode_value": "3108"
    }, {
      "subject": "J-PC",
      "value": '\u3109',
      "symbol": '\u3109',
      "unicode_value": "3109"
    }, {
      "subject": "J-PC",
      "value": '\u310A',
      "symbol": '\u310A',
      "unicode_value": "310A"
    }, {
      "subject": "J-PC",
      "value": '\u310B',
      "symbol": '\u310B',
      "unicode_value": "310B"
    }, {
      "subject": "J-PC",
      "value": '\u310C',
      "symbol": '\u310C',
      "unicode_value": "310C"
    }, {
      "subject": "J-PC",
      "value": '\u310D',
      "symbol": '\u310D',
      "unicode_value": "310D"
    }, {
      "subject": "J-PC",
      "value": '\u310E',
      "symbol": '\u310E',
      "unicode_value": "310E"
    }, {
      "subject": "J-PC",
      "value": '\u310F',
      "symbol": '\u310F',
      "unicode_value": "310F"
    }, {
      "subject": "J-PC",
      "value": '\u3110',
      "symbol": '\u3110',
      "unicode_value": "3110"
    }, {
      "subject": "J-PC",
      "value": '\u3111',
      "symbol": '\u3111',
      "unicode_value": "3111"
    }, {
      "subject": "J-PC",
      "value": '\u3112',
      "symbol": '\u3112',
      "unicode_value": "3112"
    }, {
      "subject": "J-PC",
      "value": '\u3113',
      "symbol": '\u3113',
      "unicode_value": "3113"
    }, {
      "subject": "J-PC",
      "value": '\u3114',
      "symbol": '\u3114',
      "unicode_value": "3114"
    }, {
      "subject": "J-PC",
      "value": '\u3115',
      "symbol": '\u3115',
      "unicode_value": "3115"
    }, {
      "subject": "J-PC",
      "value": '\u3116',
      "symbol": '\u3116',
      "unicode_value": "3116"
    }, {
      "subject": "J-PC",
      "value": '\u3117',
      "symbol": '\u3117',
      "unicode_value": "3117"
    }, {
      "subject": "J-PC",
      "value": '\u3118',
      "symbol": '\u3118',
      "unicode_value": "3118"
    }, {
      "subject": "J-PC",
      "value": '\u3119',
      "symbol": '\u3119',
      "unicode_value": "3119"
    }, {
      "subject": "J-PC",
      "value": '\u311A',
      "symbol": '\u311A',
      "unicode_value": "311A"
    }, {
      "subject": "J-PC",
      "value": '\u311B',
      "symbol": '\u311B',
      "unicode_value": "311B"
    }, {
      "subject": "J-PC",
      "value": '\u311C',
      "symbol": '\u311C',
      "unicode_value": "311C"
    }, {
      "subject": "J-PC",
      "value": '\u311D',
      "symbol": '\u311D',
      "unicode_value": "311D"
    }, {
      "subject": "J-PC",
      "value": '\u311E',
      "symbol": '\u311E',
      "unicode_value": "311E"
    }, {
      "subject": "J-PC",
      "value": '\u311F',
      "symbol": '\u311F',
      "unicode_value": "311F"
    }, {
      "subject": "J-PC",
      "value": '\u3120',
      "symbol": '\u3120',
      "unicode_value": "3120"
    }, {
      "subject": "J-PC",
      "value": '\u3121',
      "symbol": '\u3121',
      "unicode_value": "3121"
    }, {
      "subject": "J-PC",
      "value": '\u3122',
      "symbol": '\u3122',
      "unicode_value": "3122"
    }, {
      "subject": "J-PC",
      "value": '\u3123',
      "symbol": '\u3123',
      "unicode_value": "3123"
    }, {
      "subject": "J-PC",
      "value": '\u3124',
      "symbol": '\u3124',
      "unicode_value": "3124"
    }, {
      "subject": "J-PC",
      "value": '\u3125',
      "symbol": '\u3125',
      "unicode_value": "3125"
    }, {
      "subject": "J-PC",
      "value": '\u3126',
      "symbol": '\u3126',
      "unicode_value": "3126"
    }, {
      "subject": "J-PC",
      "value": '\u3127',
      "symbol": '\u3127',
      "unicode_value": "3127"
    }, {
      "subject": "J-PC",
      "value": '\u3128',
      "symbol": '\u3128',
      "unicode_value": "3128"
    }, {
      "subject": "J-PC",
      "value": '\u3129',
      "symbol": '\u3129',
      "unicode_value": "3129"
    }]
  };

  angular.module('ibw.item.extensions').directive('ibItemContent', function ($rootScope, $http, $sce) {

    return {
      restrict: 'A',
      replace: true,
      scope: {
        item: '=ibItemContent',
        onAnswerUpdated: '&'
      },
      template: '<div><ol class="list-group"><li class="list-group-item list-group-item-info" ng-if="content.preamble"><p class="text-muted"><strong>題幹</strong></p><p ng-bind-html="trustAsHtml(content.preamble)"></p></li><li class="list-group-item" ng-repeat="question in content.questions"><p class="text-muted" ng-if="content.questions.length > 1"><strong>（{{$index + 1}}）</strong></p><ib-question-content question="question" item="item" question-index="{{$index}}" on-answer-updated="onAnswerUpdated({result:result})"></ib-question-content></li><li class="list-group-item"><div ng-bind-html="item.solution" ng-if="item.solution"></div><p class="text-muted" ng-if="!item.solution">沒有解析</p></li></ol></div>',
      link: function link(scope, iElement, iAttrs, ctrls) {
        scope.content = scope.item.content;
        scope.trustAsHtml = function (string) {
          return $sce.trustAsHtml(string);
        };
      }
    };
  }).directive('ibQuestionContent', function ($rootScope, $http, $sce) {

    return {
      restrict: 'E',
      replace: true,
      scope: {
        question: '=',
        questionIndex: '@',
        item: '=',
        onAnswerUpdated: '&'
      },
      template: '<div><div><div bind-html-compile="question.stem | decorateQuestionContent: {item:\'item\', question:\'question\', editable:true, questionIndex: questionIndex}"></div><p>{{question.type}}</p></div><ol type="A" ng-if="question.options.length"><li ng-repeat="opt in question.options track by $index" ng-bind-html="trustAsHtml(opt)"></li></ol><p ng-if="!question.answers.length && item.fidelity !== \'low\'">沒有答案</p><p ng-if="question.answers.length == 1 && item.fidelity !== \'low\'">答案： <strong ng-repeat="answer in question.answers[0]"><span>{{answer | answerKey:item.questions[questionIndex].answeringMethod }}</span> <span ng-if="!$last">；</span></strong></p><div ng-if="question.answers.length > 1 && item.fidelity !== \'low\'">答案： <strong ng-repeat="answerGroup in question.answers"><span ng-repeat="answer in answerGroup"><span>{{answer | answerKey:item.questions[questionIndex].answeringMethod }}</span> <span ng-if="!$last">（或）</span></span> <span ng-if="!$last">；</span></strong></div><div ng-if="question.proposeAnswers.length > 0">建議答案： <strong ng-repeat="answerGroup in question.proposeAnswers track by $index"><span ng-repeat="answer in answerGroup"><span>{{answer}}</span> <span ng-if="!$last">（或）</span></span> <span ng-if="!$last">；</span></strong></div></div>',
      link: function link(scope, iElement, iAttrs, ctrls) {
        scope.trustAsHtml = function (string) {
          return $sce.trustAsHtml(string);
        };
      }
    };
  }).directive('ibKeyboard', function () {

    return {
      restrict: 'E',
      replace: true,
      scope: {
        subjectIds: '=',
        onKeyClick: '&'
      },
      template: '<div class="ib-keyboard"><div ng-repeat="subjectId in subjectIds"><span ng-click="onKeyClick({keyValue: code.value})" class="key" ng-repeat="code in KEYBOARD_CODE[subjectId.toUpperCase()]">{{code.value}}</span></div></div>',
      link: function link(scope, iElement, iAttrs, ctrls) {
        scope.KEYBOARD_CODE = KEYBOARD_CODE;
      }

    };
  }).controller('EditAnswerModalCtrl', function ($scope, $uibModalInstance, question, answerIndex, item) {

    function setInputTarget(index) {
      $scope.focusInputIndex = index;
    }

    function removeInputTarget(index) {
      if (index === $scope.focusInputIndex) {
        $scope.focusInputIndex = null;
      } else {
        refreshFocusIndexBy(index);
      }
    }

    function insertTextToInput(key) {
      var focusInputIndex = $scope.focusInputIndex;

      if (focusInputIndex != null) {
        var focusInput = $('.' + $scope.proposeAnswerClassName + ' input[type=\'text\'].propose-answer-input').get(focusInputIndex);
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
      if (index < focusInputIndex) $scope.focusInputIndex -= 1;
    }

    function isDisplayKeyboard() {
      var subjectIds = item.subjectIds;
      var result = false;

      if (subjectIds.length) result = subjectIds.map(function (subjectId) {
        return (KEYBOARD_CODE[subjectId] || []).length;
      }).reduce(function (value1, value2) {
        return value1 + value2;
      }) > 0;

      return result;
    }

    angular.extend($scope, {
      question: question,
      answers: question.answers[answerIndex] || [],
      currentFieldProposeAnswers: angular.copy(question.proposeAnswers[answerIndex] || [], []),
      proposeAnswerClassName: 'propose-answer-list-' + +new Date(),
      isDisplayKeyboard: isDisplayKeyboard,

      subjectIds: item.subjectIds,

      onFocus: function onFocus(evt, index) {
        setInputTarget(index);
      },

      onKeyClick: function onKeyClick(value) {
        insertTextToInput(value);
      },

      onAddAnswer: function onAddAnswer() {
        $scope.currentFieldProposeAnswers.push('');
      },

      onRemoveAnswer: function onRemoveAnswer($event, index) {
        $scope.currentFieldProposeAnswers.splice(index, 1);
        removeInputTarget(index);
      },

      onCancel: function onCancel() {
        $uibModalInstance.dismiss('cancel');
      },

      onSubmit: function onSubmit() {
        $uibModalInstance.close({ currentFieldProposeAnswers: $scope.currentFieldProposeAnswers, answerIndex: answerIndex });
      }
    });
  }).factory('editAnswerDialog', function ($uibModal, $interpolate) {

    return function (_question, _answerIndex, _item) {
      var modalInstance;
      var startSymbol = $interpolate.startSymbol();
      var endSymbol = $interpolate.endSymbol();

      modalInstance = $uibModal.open({
        template: '\n                    <div class="modal-header">\n                        <h3 class="modal-title">\u7DE8\u8F2F\u7B54\u6848</h3>\n                    </div>\n                    <div class="modal-body">\n                        <label>\n                          \u7B54\u6848\u6B04\uFF1A\n                        </label>\n                        <ul>\n                            <li ng-repeat="answer in answers">\n                                ' + startSymbol + 'answer' + endSymbol + '\n                            </li>\n                        </ul>\n                        <label>\n                          \u5EFA\u8B70\u7B54\u6848\uFF1A\n                        </label>\n                        <div class="clearfix"></div>\n                        <div class="col-sm-6">\n                          <ul class="row ' + startSymbol + 'proposeAnswerClassName' + endSymbol + '">\n                            <li ng-repeat="answer in currentFieldProposeAnswers track by $index">\n                                <input class="propose-answer-input" type="text" ng-model="currentFieldProposeAnswers[$index]" ng-focus="onFocus($event, $index)" />\n                                <button type="button" class="btn btn-default btn-xs" ng-click="onRemoveAnswer($event, $index)">\n                                   <i class="glyphicon glyphicon-remove"></i>\n                                </button>\n                            </li>\n                          </ul>\n                        </div>\n                        <div class="col-sm-6" ng-show="focusInputIndex != null && isDisplayKeyboard()">\n                          <div class="row">\n                            <ib-keyboard subject-ids="subjectIds" on-key-click="onKeyClick(keyValue)"></ib-keyboard>\n                          </div>\n                        </div>\n                        <div class="clearfix"></div>\n                        <button type="button" class="btn btn-default btn-xs" ng-click="onAddAnswer()">\n                           \u65B0\u589E\n                           <i class="glyphicon glyphicon-plus"></i>\n                        </button>\n                    \n                    </div>\n                    <div class="modal-footer">\n                        <button class="btn btn-primary" type="button" ng-click="onSubmit()">\u78BA\u5B9A</button>\n                        <button class="btn btn-warning" type="button" ng-click="onCancel()">\u53D6\u6D88</button>\n                    </div>\n\n                    ',
        controller: 'EditAnswerModalCtrl',
        resolve: {
          question: function question() {
            return _question;
          },
          answerIndex: function answerIndex() {
            return _answerIndex;
          },
          item: function item() {
            return _item;
          }
        }
      });

      return modalInstance;
    };
  }).directive('answerarea', function (editAnswerDialog) {

    var _normalizeFieldAnswers = function _normalizeFieldAnswers(answers, fieldSize) {
      for (var index = 0; index < fieldSize; index++) {
        if (!answers[index]) answers[index] = [];
      }
      return answers;
    };

    var _buildEditable = function _buildEditable(scope, iElement, questionIndex, answerIndex, question, item) {
      iElement.on('click', function () {
        editAnswerDialog(question, answerIndex, item).result.then(function (result) {
          var propseFieldAnswers = result.currentFieldProposeAnswers;
          var answers = question.answers;

          question.proposeAnswers = _normalizeFieldAnswers(question.proposeAnswers, answers.length);
          question.proposeAnswers[answerIndex] = propseFieldAnswers;

          scope.onAnswerUpdated({
            result: {
              questionIndex: questionIndex,
              proposeAnswers: question.proposeAnswers
            }
          });
        });
      });
    };

    return {
      restrict: 'C',
      scope: {
        editable: '@',
        answerIndex: '@',
        question: '=',
        questionIndex: '@',
        onAnswerUpdated: '&',
        item: '='
      },
      link: function link(scope, iElement) {
        var question = scope.question,
            questionIndex = scope.questionIndex,
            answerIndex = scope.answerIndex,
            item = scope.item;


        if (scope.editable) _buildEditable(scope, iElement, Number(questionIndex), answerIndex, question, item);
      }
    };
  }).filter('decorateQuestionContent', function () {

    var ANSWER_AREA_TAG_REGEXP = /<span[^>]+answerarea[^>]+>/g;

    var _decorateAttributes = function _decorateAttributes(html, answerIndex, attrs) {
      var attrTexts = [];

      for (var name in attrs) {
        attrTexts.push(_.kebabCase(name) + '=' + attrs[name]);
      }return html.replace(/(>)/g, ' answer-index=' + answerIndex + ' ' + attrTexts.join(' ') + ' on-answer-updated="onAnswerUpdated({result:result})" $&');
    };

    return function (html, attrs) {
      var index = -1;

      return html.replace(ANSWER_AREA_TAG_REGEXP, function (originalHtml) {
        index++;
        return _decorateAttributes(originalHtml, index, attrs);
      });
    };
  });
})(); 
       if (typeof module !== 'undefined') module.exports = 'ibw.ui.extensions';
     })();
    