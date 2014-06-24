var fs = require("fs");
var bh = require("bh");
var vm = require("vm");

var bemJson = vm.runInThisContext(fs.readFileSync("desktop.bundles/index/index.bemjson.js", {encoding: "utf-8"}));
var resultTarget = 'desktop.bundles/index/index.bh.js';
var enbBuilder = require('enb/lib/server/server-middleware').createBuilder({
    cdir: process.cwd()
});

enbBuilder(resultTarget).then(function () {
    var i = 1;
    var intervalId = setInterval(function () {
        console.time('generate time #' + i);
        var bh = require(process.cwd() + '/desktop.bundles/index/index.bh.js');
        var html = bh.apply(bemJson);
        console.timeEnd('generate time #' + i);

        i += 1;

        if (i > 10) {
            clearInterval(intervalId);
        }
    }, 1000);
}, function (err) {
    console.error(err)
});
