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

module.exports = postcss.plugin('postcss-px-to-prem', function () {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var defaults = {
        baseline: 16
    };

    opts = _extends({}, defaults, opts);
    opts.baseline = parseInt(opts.baseline, 10); // convert e.g. "16px" to 16

    return function (css) {

        css.walkRules(function (_ref) {
            var selector = _ref.selector;

            selector.replace(/(\.?\d+(?:\.\d+)?)(pr?em)/, function (undefined, value, unit) {
                unit = unit.replace('p', '');
                return value + unit;
            });
        });
    };
});
