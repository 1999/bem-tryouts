module.exports = function (bh) {
    bh.match('body-wrapper', function (ctx) {
        ctx.cls('foo bar');
    });
};
