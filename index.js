'use strict';

var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i]; for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    } return target;
};

var postcss = require('postcss');

module.exports = postcss.plugin('postcss-px-to-prem', (opts = {}) => {
    const defaults = {
        rootValue: 16
    };

    opts = _extends({}, defaults, opts);

    const rootValue = parseInt(opts.rootValue, 10);

    return css => {

        css.replaceValues(/\.?\d+(\.\d+)?pr?em/g, { fast: 'em' }, str => {
            const value = parseFloat(str, 10) / rootValue; // get number (the value) and divided rootValue
            const unit = str.replace(/[^a-oq-z]/g, ''); // get letters (the unit) and remove 'p'
            return value + unit;
        });
    };
});
