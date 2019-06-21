'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const reverseKGroup = (head, k) => {
  if (k <= 1) return head;
  const reversedNodes = new Array(k);
  let current = head;
  let index = k - 1;
  while (index >= 0 && current != null) {
    reversedNodes[index] = current;
    current = current.next;
    if (reversedNodes[index + 1]) {
      reversedNodes[index].next = reversedNodes[index + 1];
    }
    index--;
  }
  reversedNodes[reversedNodes.length - 1].next = current;
  return reversedNodes[0];
};
exports.default = reverseKGroup;
