const isPalindrome = (x) => {
  if (x < 0) return false;
  let s = '' + x,
    len = s.length / 2 | 0;
  for (let i = 0; i < len; ++i) {
    if (s[i] !== s[s.length - 1 - i]) return false;
  }
  return true
};

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {
  if (s.length <= 1) return s;
  let len = s.length,
    longest = s[0];
  /*
    L = len(s) - 1
    longestPali = ''
    for start in [0:L]:
      for end in [start + 1:L]:
        if s[start:end] isPalindrome && (end - start) > len(longestPali): longestPali = s[start:end]
  */
  for (let start = 0; start < len - 1; ++start) {
    for (let end = start + 1; end < len; ++end) {
      let str = s.substring(start, end + 1);
      if (str.length > longest.length && isPalindrome(str)) longest = str
    }
  }
  return longest;
};

module.exports = longestPalindrome;