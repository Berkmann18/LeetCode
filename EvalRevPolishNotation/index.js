'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const OPS = ['+', '-', '*', '/'];
const evalRPN = (tokens) => {
  const values = [];
  for (let token of tokens) {
    if (OPS.includes(token)) {
      const right = values.pop();
      const left = values.pop();
      const op = `${left}${token}(${right})`;
      const comp = eval(op) | 0;
      values.push(comp);
    }
    else {
      values.push(parseInt(token));
    }
  }
  return values[0];
};
exports.default = evalRPN;
