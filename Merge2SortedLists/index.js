const ListNode = require('../list');

const sortFn = (a, b) => a.val - b.val;

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = (l1, l2) => {
  let sorted = new ListNode(0),
    head = sorted;

  while (l1 !== null && l2 !== null) {
    // process.stdout.write('\n\tBEFORE\nl1=' + l1 + '\nl2=' + l2 + '\nhead=' + head + '\nsorted=' + sorted + '\n');
    const l1IsBigger = sortFn(l1, l2) > 0;
    if (l1IsBigger && l2 !== null) {
      head.next = new ListNode(l2.val);
      head = head.next;
      l2 = l2.next;
    } else if (!l1IsBigger && l1 !== null) {
      head.next = new ListNode(l1.val);
      head = head.next;
      l1 = l1.next;
    }
    // process.stdout.write('\nl1=' + l1 + '\nl2=' + l2 + '\nhead=' + head + '\nsorted=' + sorted + '\n');
  }
  // process.stdout.write('\n\tl1 done=' + (l1 === null) + ' l2 done=' + (l2 === null) + '\n');
  head.next = (l2 !== null) ? l2 : l1;
  // process.stdout.write('\n\tFINAL\nl1=' + l1 + '\nl2=' + l2 + '\nhead=' + head + '\nsorted=' + sorted + '\n');
  return sorted.next;
};

module.exports = mergeTwoLists