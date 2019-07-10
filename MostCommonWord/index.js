'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const tokenizer = (data) => {
  return data
    .split(/[!?',; .]+/g)
    .filter(Boolean)
    .map(tk => tk.toLowerCase());
};
const mostCommonWord = (paragraph, banned) => {
  const features = {};
  let mcw = '';
  let featMax = 0;
  paragraph
    .split(/[!?',; .]+/g)
    .forEach(token => {
      if (token.length) {
        const tk = token.toLowerCase();
        if (!banned.includes(tk)) {
          if (tk in features)
            ++features[tk];
          else
            features[tk] = 1;
          if (features[tk] > featMax) {
            featMax = features[tk];
            mcw = tk;
          }
        }
      }
    });
  return mcw;
};
exports.default = mostCommonWord;
