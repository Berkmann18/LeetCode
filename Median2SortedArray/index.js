const median = arr => { //Assumes arr is already sorted
  const mid = arr.length / 2 | 0;
  return arr.length % 2 !== 0 ? arr[mid] : (arr[mid - 1] + arr[mid]) / 2;
};

const sortFn = (a, b) => a - b;

const merge = (a, b) => {
  let sorted = [],
    indexA = 0,
    indexB = 0;

  while (indexA < a.length && indexB < b.length) {
    const aIsBigger = sortFn(a[indexA], b[indexB]) > 0;
    sorted.push(aIsBigger ? b[indexB++] : a[indexA++])
  }

  const bDone = indexB < b.length;
  sorted = sorted.concat(bDone ? b.slice(indexB) : a.slice(indexA))

  return sorted;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => median(merge(nums1, nums2))

module.exports = findMedianSortedArrays