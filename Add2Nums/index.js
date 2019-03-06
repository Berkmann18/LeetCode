/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  /* let r1 = '',
    r2 = '',
    n1 = l1,
    n2 = l2;

  while(n1 !== null) {
    r1 = `${n1.val}${r1}`;
    n1 = n1.next;
  }
  while(n2 !== null) {
    r2 = `${n2.val}${r2}`;
    n2 = n2.next;
  }

  let res = (`${parseFloat(r1) + parseFloat(r2)}`).split('').reverse()
  let nodes = res.map(num => new ListNode(num))
  for (let i = 0; i < nodes.length - 1; ++i) nodes[i].next = nodes[i + 1]
  return nodes[0] */
  let res = new ListNode(0),
    head = res,
    sum = 0,
    carry = 0;

  while(l1 !== null || l2 !== null || sum > 0) {

    if(l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }
    if(l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }
    if(sum >= 10) {
      carry = 1;
      sum -= 10;
    }

    head.next = new ListNode(sum);
    head = head.next;

    sum = carry;
    carry = 0;
  }

  return res.next;
};

module.exports = addTwoNumbers