const OPS = ['+', '-', '*', '/'];

/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = (tokens: string[]) => {
  const values: number[] = []; //Stack of values
  // console.log('tokens=', tokens);

  for (let token of tokens) {
    // console.log('values=', values);
    if (OPS.includes(token)) {
      const right: number = values.pop() as number;
      const left: number = values.pop() as number;
      const op = `${left}${token}(${right})`;
      // console.log('op=', op);
      const comp: number = eval(op) | 0;
      values.push(comp);
      // console.log('|=> comp=', comp);
    } else {
      values.push(parseInt(token));
      // console.log('pushed', token);
    }
  }
  return values[0];
};

export default evalRPN;
