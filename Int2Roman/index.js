/* const l2r = {
  1: 'I',
  5: 'V',
  10: 'X',
  50: 'L',
  100: 'C',
  500: 'D',
  1000: 'M'
}; */

const LOG = false;
const output = (data) => LOG && process.stdout.write(data);

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  /*
  len := length of num
  if len === 1
    if distance between num and 5 is 1, return 'IV'
    else if num >= 5 return 'V' + rest * 'I'
    else return num * 'I'
  if len === 2
    if distance between num and 50 is is 10 or less, return 'X..L'
    else return num[0] * 'X' + intToRoman(num[1])
  if len === 3
    if distance between num and 500 is 100 or less, return 'C..D'
    else return num[0] * 'C' + intToRoman(num[1:2])
  if len === 4
    if distance between num and 1000 is 100 or less, return 'C...M'
    else return num[0] * 'M' + intToRoman(num[1:3])
  ...
  */
  if (num === 0) return ''
  let str = '' + num,
    len = str.length,
    d0 = null,
    d1 = null;
  output('num='+ num + '\n')
  switch(len) {
  case 1:
    output('c1\n')
    if (5 - num === 1) {
      output('a\n')
      return 'IV'
    } else if (10 - num === 1) {
      output('b\n')
      return 'IX'
    } else if (num >= 5) {
      output('c\n')
      return 'V' + 'I'.repeat(num - 5)
    } else {
      output('d\n')
      return 'I'.repeat(num)
    }

  case 2:
    d0 = 50 - num;
    d1 = 100 - num;
    output('c2\n')
    if (num >= 50 && num < 90) {
      output('a\n')
      return 'L' + intToRoman(num - 50)
    } else if (d0 <= 10 && 0 < d0) {
      output('b\n')
      return `XL${intToRoman(d0 - 10)}`;
    } else if (d1 <= 10) {
      output('c\n')
      return `XC${intToRoman(d1 - 10)}`;
    } else {
      output('e\n')
      return 'X'.repeat(str[0]) + intToRoman(str.substring(1) | 0)
    }
  case 3:
    d0 = 500 - num;
    d1 = 1000 - num;
    output('c3\n')
    if (num >= 500 && num < 900) {
      output('a\n')
      return 'D' + intToRoman(num - 500)
    } else if (d0 <= 100 && 0 < d0) {
      output('b\n')
      return `CD${intToRoman(d0 - 100)}`;
    } else if (d1 <= 100) {
      output('c\n')
      return `CM${intToRoman(d1 - 100)}`;
    } else {
      output('e\n')
      return 'C'.repeat(str[0]) + intToRoman(str.substring(1) | 0)
    }

  case 4:
    output('c4\n')
    if (num >= 1000) {
      output('a\n');
      return 'M' + intToRoman(num - 1000)
    } else if (1000 - num <= 100) {
      output('b\n');
      return `${intToRoman(1000 - num)}D`
    } else {
      output('c\n');
      return 'M'.repeat(str[0]) + intToRoman(str.substring(1) | 0)
    }

  default:
    return str
  }
};

module.exports = intToRoman