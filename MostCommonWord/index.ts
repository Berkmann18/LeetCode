const tokenizer = (data: string): string[] => {
  return data
    .split(/[, .]+/g)
    .filter(Boolean)
    .map(tk => tk.toLowerCase());
};

interface Feature {
  [name: string]: number;
}

const mostCommonWord = (paragraph: string, banned: string[]): string => {
  const features: Feature = {};
  const tokens = tokenizer(paragraph);
  tokens.forEach(token => {
    if (token in features) features[token]++;
    else features[token] = 1;
  });
  tokens.sort((a, b) => features[b] - features[a]);
  const res = tokens.filter(tk => !banned.includes(tk));
  return res[0];
};

export default mostCommonWord;
