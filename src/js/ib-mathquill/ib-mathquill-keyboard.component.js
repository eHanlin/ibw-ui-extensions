
(function () {

    'use strict';

    angular
        .module('ibw.mathquill.extensions')
        .component('ibMathquillKeyboard', {
            bindings: {
                onKey:'&',
                subjectIds:'<',
                latex:'@'
            },
            controller: MathquillKeyboardController,
            templateUrl: 'src/js/ib-mathquill/ib-mathquill-keyboard.tpl.html'
        })

    ;

    function MathquillKeyboardController(keyboardCode, $element) {
        this.KEY_CODE_MAP = keyboardCode();

        this.isLatex = ()=> {
            return this.latex == 'true';
        }

        this.getCategories = (codes)=> {
            let values = (codes || []).filter((code)=> code.isLatex == this.isLatex());
            let groupResult = _.groupBy(values, 'category');
            return _.keys(groupResult);
        };

        this.switchCategory = (name)=> {
            this.currentCategory = name;
        };

        this.$doCheck = (c)=> {
            let $keys = $element.find('.key');

            if (!this.currentCategory) {
                let $categoryLink = $element.find('.category-link').eq(0);
                this.currentCategory = $categoryLink.attr('data-name');
            }
            
            $keys.each((index, el)=>{
                if (angular.element(el).find('.katex').length == 0 && el.dataset.isLatex == 'true') {
                    katex.render(el.dataset.symbol, el, {throwOnError:false})
                }
            });
        };
    }


})();

