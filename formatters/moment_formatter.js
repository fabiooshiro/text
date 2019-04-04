const moment = require('moment');

const one_day_in_ms = 24 * 60 * 60 * 1000;

function num2moment(number) {
    let days = Math.floor(number);
    let ms = (number - days) * one_day_in_ms;
    return moment('1899-12-30').add(days, 'days').add(ms, 'milliseconds');
}

class MomentFormatter {
    
    accept(str_format) {
        const moment_formatters = ['M', 'MM', 'MMMM', 'D', 'DD', 'ddd', 'dddd', 'YY', 'YYYY', 'HH'];
        if (moment_formatters.indexOf(str_format) !== -1) {
            return true;
        }
        // TODO: should match yyyy/mm/dd
    }

    format(value, str_format) {
        let moment_date;
        if (typeof value === 'number') {
            moment_date = num2moment(value);
        } else if (typeof value === 'string') {
            moment_date = moment(value);
        }
        return moment_date.format(str_format)
    }
}

module.exports = MomentFormatter;