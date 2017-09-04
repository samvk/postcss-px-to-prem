var postcss = require('postcss');

module.exports = postcss.plugin('postcss-px-to-prem', (opts = {}) => {
    const defaults = {
        baseline: 16,
    };

    opts = opts.assign({}, defaults, opts);
    opts.baseline = parseInt(opts.baseline, 10); // convert e.g. "16px" to 16

    return function (css, result) {

        css.walkRules((rule) => {
            const selector = rule.selector;

            selector.replace('');

        });

        // Transform CSS AST here

    };
});
