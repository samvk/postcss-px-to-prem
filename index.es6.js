var postcss = require('postcss');

module.exports = postcss.plugin('postcss-px-to-prem', (opts = {}) => {
    const defaults = {
        baseline: 16,
    };

    opts = { ...defaults, ...opts };

    const baseline = parseInt(opts.baseline, 10);

    return (css) => {

        css.walkRules(({ selector }) => {
            selector.replace(/(\.?\d+(?:\.\d+)?)(pr?em)/, (undefined, value, unit) => {
                value /= baseline;
                unit = unit.replace('p', '');
                return value + unit;
            });
        });
    };
});
