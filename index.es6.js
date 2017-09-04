import postcss from 'postcss';

export default postcss.plugin('postcss-px-to-prem', (opts = {}) => {
    const defaults = {
        baseline: 16,
    };

    opts = { ...defaults, ...opts };

    const baseline = parseInt(opts.baseline, 10);

    return (css) => {

        css.replaceValues(/\.?\d+(\.\d+)?pr?em/g, { fast: 'em' }, (str) => {
            const value = parseFloat(str, 10) / baseline; // get number (the value) and divided baseline
            const unit = str.replace(/[^a-oq-z]/g, ''); // get letters (the unit) and remove 'p'
            return value + unit;
        });
    };
});
