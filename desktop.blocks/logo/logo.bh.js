module.exports = function (bh) {
    bh.match('logo', function (ctx) {
        ctx
            .tag('a')
            .attr('href', '/');
    });
};
