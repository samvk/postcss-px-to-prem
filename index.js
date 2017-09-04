var postcss = require('postcss');

module.exports = postcss.plugin('postcss-px-to-prem', function (opts = {}) {

    const defaults = {
        baseline: 16,
    };

    opts = opts.assign({}, defaults, opts);

    opts.baseline = parseInt(opts.baseline); // convert e.g. "16px" to 16

    return function (root, result) {

        // Transform CSS AST here

    };
});
