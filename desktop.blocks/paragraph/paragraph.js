modules.require(['i-bem__dom'], function (DOM) {
    DOM.decl('paragraph', {
        beforeElemSetMod: {
            item: {
                foo: {
                    bar: function () {
                        this.domElem[0].html('FOO!');
                    },
                    '': function () {
                        this.domElem[0].html('BARRR!');
                    }
                }
            }
        },
        onSetMod: {
            js: {
                inited: function () {
                    console.log("init", this.domElem[0].outerHTML, this);
                    this.toggleMod(this.findElem('item')[0], 'foo', 'bar', '');
                }
            }
        }
    }, {
        // @see http://ru.bem.info/tutorials/bem-js-tutorial/03-live-initialization/
        live: function() {
            this.liveInitOnEvent('click');
        }
    });
});
