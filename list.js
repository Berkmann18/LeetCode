class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }

  toString() {
    return `${this.val}->${this.next}`
  }
}

module.exports = ListNode