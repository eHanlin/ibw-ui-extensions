
(function() {

  'use strict';

  angular.module('ibw.common.extensions')

    .filter('answerKey', function () {
        return function(answer, answeringMethod) {
                
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
    }) 

})();
