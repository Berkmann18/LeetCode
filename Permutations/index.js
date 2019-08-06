"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const factorial = (x) => {
    return (x <= 1) ? x : x * factorial(x - 1);
};
const rmEl = (arr, idx) => arr.filter((el, i) => i !== idx);
const permute = (nums) => {
    const Ps = [nums];
    switch (nums.length) {
        case 0:
        case 1:
            return Ps;
        case 2:
            return [nums, [nums[1], nums[0]]];
        case 3:
            const subF = permute(nums.slice(1));
            console.log('sf=', subF);
            let first = [nums[0], ...subF];
            return [first];
    }
    return Ps;
};
exports.default = permute;
