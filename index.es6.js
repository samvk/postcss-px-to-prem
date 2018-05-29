import postcss from 'postcss';

export default postcss.plugin('postcss-px-to-prem', (opts = {}) => {
    const defaults = {
        rootValue: 16,
    };

    opts = { ...defaults, ...opts };

    const rootValue = parseInt(opts.rootValue, 10);

    return (css) => {

        css.replaceValues(/\.?\d+(\.\d+)?pr?em/g, { fast: 'em' }, (str) => {
            const value = (parseFloat(str, 10) / rootValue).toFixed(3); // get number (the value) and divided rootValue
            const unit = str.replace(/[^a-oq-z]/g, ''); // get letters (the unit) and remove 'p'
            return value + unit;
        });
    };
});
