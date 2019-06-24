"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conv = (s) => {
    const romanSubtraction = (s) => {
        const parts = s.split('').map(chr => conv(chr));
        let total = parts[parts.length - 1];
        for (let i = 0; i < parts.length - 1; ++i)
            total -= parts[i];
        return total;
    };
    switch (s) {
        case 'I':
            return 1;
        case 'IV':
            return 4;
        case 'V':
            return 5;
        case 'IX':
            return 9;
        case 'X':
            return 10;
        case 'L':
            return 50;
        case 'C':
            return 100;
        case 'D':
            return 500;
        case 'M':
            return 1000;
        default:
            if (s.length < 2)
                return 0;
            return romanSubtraction(s);
    }
};
const romanToInt = (s) => {
    const bucket = {
        I: 0,
        IV: 0,
        V: 0,
        IX: 0,
        X: 0,
        L: 0,
        C: 0,
        D: 0,
        M: 0
    };
    const tokens = s.split('');
    const setBucket = (token) => {
        if (token in bucket)
            bucket[token]++;
        else
            bucket[token] = 1;
    };
    for (let i = 0; i < tokens.length; ++i) {
        const nextIsBigger = i < tokens.length - 1 && conv(tokens[i]) < conv(tokens[i + 1]);
        nextIsBigger ? setBucket(`${tokens[i]}${tokens[++i]}`) : setBucket(tokens[i]);
    }
    const bucketSum = Object.entries(bucket).map(entry => entry[1] * conv(entry[0]));
    return bucketSum.reduce((acc, val) => acc + val, 0);
};
exports.default = romanToInt;
