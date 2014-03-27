module.exports = function (bh) {
    bh.match({
        'menu': function(ctx) {
            ctx.tag('ul');
        },
        'menu__item': function(ctx) {
            ctx.tag('li');
            ctx.content(ctx.json().text)
            ctx.mod('pos', ctx.position());

            if (ctx.isFirst()) {
                ctx.mod('first', 'yes');
            }
            if (ctx.isLast()) {
                ctx.mod('last', 'yes');
            }
        }
    });
};
