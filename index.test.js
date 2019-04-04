const TEXT = require('./index.js');

test('TEXT(number, "ddd")', () => {
    expect(TEXT(43469,'ddd')).toBe('Fri');
});

test('TEXT(number, "HH")', () => {
    expect(TEXT(43817.937500000000,'HH')).toBe('22');
});

test('TEXT(number, "xxxxxx")', () => {
    expect(TEXT(43469,'xxxxxx')).toBe('xxxxxx');
});

test('TEXT(string, "ddd") easter egg', () => {
    expect(TEXT('2019-01-04','ddd')).toBe('Fri');
});

