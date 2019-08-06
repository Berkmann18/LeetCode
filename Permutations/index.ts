const factorial = (x:number): number => {
	return (x <= 1) ? x: x * factorial(x - 1)
}

const rmEl = (arr: any[], idx: number): any[] => arr.filter((el, i) => i !== idx)

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = (nums: number[]): number[][] => {
  const Ps:number[][] = [nums];
  // console.log('len=', nums.length, '! =', factorial(nums.length))
  switch(nums.length) {
    case 0:
    case 1:
      return Ps;
    case 2:
      return [nums, [nums[1], nums[0]]]
    case 3:
      // const subF: number[] = (permute(nums.slice(1)) as any)//.flat();
      const subF: number[][] = permute(nums.slice(1)).map(arr => [nums[0], ...arr]).flat()
      console.log('sf=', subF)
      // let first: number[] = [...subF];
      // const subS: number[] = (permute(rmEl(nums, 1)) as any).flat()
      // let second: number[] = [nums[1], ...subS];//, third: number[] = [nums[2], ...permute(rmEl(nums, 2))];
      return [subF/* , ...third */]
  }
  return Ps;
}

export default permute;
