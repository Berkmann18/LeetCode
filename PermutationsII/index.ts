// const factorial = (x: number): number => {
//   return x <= 1 ? x : x * factorial(x - 1);
// };

const rmEl = (arr: any[], idx: number): any[] => arr.filter((_el, i: number): boolean => i !== idx);

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = (nums: number[]): number[][] => {
  // console.log('len=', nums.length, '! =', factorial(nums.length))
  const perms: number[][] = [];
  const ps: string[] = [];
  switch (nums.length) {
  case 0:
  case 1:
    return [nums];
  case 2:
    return nums[0] === nums[1] ? [nums] : [nums, [nums[1], nums[0]]];
  default:
    for (let i = 0; i < nums.length; ++i) {
      const p: number[][] = permuteUnique(rmEl(nums, i)).map((arr: number[]): number[] => [
        nums[i],
        ...arr
      ]);
      p.forEach((arr: number[]) => {
        const str: string = arr.toString();
        if (!ps.includes(str)) {
          ps.push(str);
          perms.push(arr);
        }
      });
    }
    return perms;
  }
};

export default permuteUnique;
