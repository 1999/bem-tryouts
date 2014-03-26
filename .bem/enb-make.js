module.exports = function (config) {
    config.node('pages/index', function (nodeConfig) {
        nodeConfig.addTechs([
            // [ require('enb/techs/levels'), { levels: getLevels(config) } ],
            // [ require('enb/techs/file-provider'), { target: '?.bemdecl.js' } ],
            // require('enb/techs/deps-old'),
            // require('enb/techs/files')
            require('enb/techs/files'),
            require('enb/techs/js'),
            require('enb/techs/css'),
            [ require('enb/techs/file-copy'), { sourceTarget: '?.js', destTarget: '_?.js' } ],
            [ require('enb/techs/file-copy'), { sourceTarget: '?.css', destTarget: '_?.css' } ]
        ]);

        nodeConfig.addTargets(['_?.js', '_?.css']);
    });
};

function getLevels(config) {
    return [
      { path: 'bem-bl/blocks-common', check: false },
      { path: 'bem-bl/blocks-desktop', check: false },
      { path: 'lego/blocks-common', check: false },
      { path: 'lego/blocks-desktop', check: false },
      'common.blocks',
      'desktop.blocks'
    ].map(function(levelPath) { return config.resolvePath(levelPath); });
}
