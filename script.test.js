const calc = require('./script');

test(
    'Check the sum',
    () => {
        expext(calc('5 + 7')).toBe('12');
    }
)

test(
    'Check the minus',
    () => {
        expext(calc('20 - 5')).toBe('15');
    }
)

test(
    'Check the multiply',
    () => {
        expext(calc('3 * 8')).toBe('24');
    }
)

test(
    'Check the div',
    () => {
        expext(calc('40/10')).toBe('4');
    }
)


