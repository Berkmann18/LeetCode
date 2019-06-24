'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const reverseInKGroup = (head, k) => {
  if (k <= 1 || !head) return head;
  const groups = new Array(k).fill([]);
  let cur = head;
  let j = 0;
  while (cur != null) {
    groups[j] = [];
    for (let i = k - 1; i >= 0; --i) {
      groups[j][i] = cur;
      if (cur) cur = cur.next;
    }
    ++j;
  }
  const list = groups.reduce((a, b) => a.concat(b), []).filter(n => n !== null);
  for (let i = 0; i < list.length - 1; ++i) {
    if (list[i]) list[i].next = list[i + 1];
  }
  return list[0];
};
exports.default = reverseInKGroup;
