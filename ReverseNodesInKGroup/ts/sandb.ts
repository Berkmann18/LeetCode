import ListNode from './listNode';
import reverseKGroup from './index';

const one: ListNode = new ListNode(1);
const two: ListNode = new ListNode(2);
const three: ListNode = new ListNode(3);
const four: ListNode = new ListNode(4);
const five: ListNode = new ListNode(5);
one.next = two;
two.next = three;
three.next = four;
four.next = five;

type LN = ListNode | null | undefined;

console.log(one.print());
console.log('\nReversed (k=2):');
const rev: ListNode = reverseKGroup(one, 2);
console.log(rev.print());

console.log('\nReversed (k=3):');
const rev3: ListNode = reverseKGroup(one, 3);
console.log(rev3.print());
