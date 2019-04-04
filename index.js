const MomentFormatter = require('./formatters/moment_formatter.js');

const formatters = [
    new MomentFormatter()
];

module.exports = function TEXT(value, str_format) {
    let formatter = formatters.find(f => f.accept(str_format));
    if (formatter) {
        return formatter.format(value, str_format);
    } else {
        return str_format;
    }
};
