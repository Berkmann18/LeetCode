import ListNode from './listNode';
type LN = ListNode | null | undefined;

const reverseKGroup = (head: ListNode, k: number): ListNode => {
  if (k <= 1) return head;
  const reversedNodes: ListNode[] = new Array(k);
  let current: LN = head;
  let index: number = k - 1;
  while (index >= 0 && current != null) {
    // console.log('current=', current, '\n\tindex=', index);
    reversedNodes[index] = current;
    current = current.next;
    if (reversedNodes[index + 1]) {
      // console.log('reversedNodes[index + 1]=', reversedNodes[index + 1]);
      reversedNodes[index].next = reversedNodes[index + 1];
    }
    index--;
  }
  // console.log('New current=', current, 'index=', index);
  reversedNodes[reversedNodes.length - 1].next = current;

  // console.log('reversedNodes=', reversedNodes.map(n => n && n.val));
  // for (let i = 0; i < reversedNodes.length; ++i)
  // console.log('reversedNodes(next)=', reversedNodes.map(n => n && n.next && n.next.val));
  // for (let i: number = 0; i < reversedNodes.length; i++) console.log(`node(${i}): ${reversedNodes[i]}`);
  return reversedNodes[0] as ListNode;
};

export default reverseKGroup;
