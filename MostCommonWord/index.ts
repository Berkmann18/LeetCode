const tokenizer = (data: string): string[] => {
  //O(2n + nk)
  return data
    .split(/[!?',; .]+/g) //T(n)
    .filter(Boolean) //T(n)
    .map(tk => tk.toLowerCase()); //T(nk)
  //T = n+n+nk = 2n+nk
};

interface Feature {
  [name: string]: number;
}

//64ms, 60.45%; 36.1MB, 57.56% [O(n(k+7+m))]
/* const mostCommonWordFirst = (paragraph: string, banned: string[]): string => {
  const features: Feature = {}; //T(1)
  const tokens = tokenizer(paragraph); //T(3nk)
  tokens.forEach(token => { //T(n)
    if (token in features) features[token]++; //T(3)
    else features[token] = 1; //T(1)
  });
  tokens.sort((a, b) => features[b] - features[a]); //T(2n)
  const res = tokens.filter(tk => !banned.includes(tk)); //T(n*m)
  return res[0]; //T(1)
  //T(n) = 1 + 2n + nk + 3n + 2n + n*m + 1 = nk + 7n + nm + 2 = n(k+7+m) + 2
}; */

//56ms, 92.66%; 35.1MB, 94.96% [O(2n)]
const mostCommonWord = (paragraph: string, banned: string[]): string => {
  const features: Feature = {}; //T(1)
  let mcw = ''; //T(1)
  let featMax = 0; //T(1)
  paragraph
    .split(/[!?',; .]+/g) //T(n)
    .forEach(token => {
      //T = 1 + 1 + n + 2 + 2 + 2 + 1 = n + 9
      if (token.length) {
        //T(1)
        const tk = token.toLowerCase(); //T(1)
        if (!banned.includes(tk)) {
          //T(n)
          if (tk in features) ++features[tk];
          //T(2)
          else features[tk] = 1; //T(1)
          if (features[tk] > featMax) {
            //T(2)
            featMax = features[tk]; //T(2)
            mcw = tk; //T(1)
          }
        }
      }
    });

  return mcw; //T(1)
  //T = 1 + 1 + 1 + n + n + 9 + 1 = 2n + 13
};

export default mostCommonWord;
