
(function () {


    'use strict';

    let MQ = MathQuill.noConflict().getInterface(2);

    angular
        .module('ibw.mathquill.extensions')
        .component('ibMathquillInput', {
            bindings:{
                answer:'<',
                onEdited:'&',
                onFocus:'&'
            },
            controller: MathquillInputController,
            templateUrl: 'src/js/ib-mathquill/ib-mathquill-input.tpl.html'
        })
    ;

    function MathquillInputController($element, $timeout, $scope) {
        let update = true;
        let $mathquillEl = $element.find('.ib-mathquill-input');
        let mathField = MQ.MathField($mathquillEl.get(0), {
            spaceBehavesLikeTab:true,
            handlers:{

                edit:(mathField)=> {

                }

            }
        });

        $mathquillEl.on('focusin', ()=> {
            update = false;
            this.onFocus({mathField:mathField});
            $scope.$apply();
        });

        $mathquillEl.on('focusout', ()=> {
            let latex = mathField.latex();
            this.onEdited({answer:latex});
            $scope.$apply();
            update = true;
        });

        this.$onInit = ()=> {
            mathField.latex(this.answer);
        };

        this.$doCheck = ()=> {
            if((update || $element.get(0).hasAttribute('readonly')) && mathField.latex() != this.answer) {
                mathField.latex(this.answer);
            }
        };

    }

})();
