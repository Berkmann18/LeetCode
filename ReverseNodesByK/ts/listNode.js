'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
class ListNode {
  constructor(x, next = null) {
    this.val = -9999;
    this.val = x;
    this.next = next;
  }
  toString() {
    const fw = this.next != null ? '->' : '';
    return `${this.val}${fw}`;
  }
  print() {
    let current = this;
    let out = '';
    while (current != null) {
      out += current;
      current = current.next;
    }
    return out;
  }
}
exports.default = ListNode;
