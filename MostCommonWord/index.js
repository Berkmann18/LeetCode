'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const tokenizer = data => {
  return data
    .split(/[, .]+/g)
    .filter(Boolean)
    .map(tk => tk.toLowerCase());
};
const mostCommonWord = (paragraph, banned) => {
  const features = {};
  const tokens = tokenizer(paragraph);
  tokens.forEach(token => {
    if (token in features) features[token]++;
    else features[token] = 1;
  });
  tokens.sort((a, b) => features[b] - features[a]);
  const res = tokens.filter(tk => !banned.includes(tk));
  return res[0];
};
exports.default = mostCommonWord;
