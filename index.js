var postcss = require('postcss');

module.exports = postcss.plugin('postcss-px-to-prem', (opts = {}) => {
    const defaults = {
        baseline: 16,
    };

    opts = { ...defaults, ...opts };

    opts.baseline = parseInt(opts.baseline, 10); // convert e.g. "16px" to 16

    return (css) => {

        css.walkRules(({ selector }) => {
            selector.replace(/(\.?\d+(?:\.\d+)?)(pr?em)/, (undefined, value, unit) => {
                unit = unit.replace('p', '');
                return value + unit;
            });
        });
    };
});
