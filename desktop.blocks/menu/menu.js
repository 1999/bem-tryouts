modules.require(['i-bem__dom'], function (DOM) {
    DOM.decl('menu', {
        onSetMod: {
            'js' : {
                'inited' : function() {
                    console.log(this.domElem[0].outerHTML);
                }
            }
        }
    });
});
