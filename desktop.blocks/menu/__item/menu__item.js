modules.require(['i-bem__dom'], function (DOM) {
    DOM.decl('menu__item', {
        onSetMod: {
            'js' : {
                'inited' : function() {
                    console.log(this.domElem[0].outerHTML);
                }
            }
        }
    });
});
