import ListNode from '../listNode';
type LN = ListNode | null;

const reverseInKGroup = (head: ListNode, k: number): ListNode => {
  if (k <= 1 || !head) return head;
  /* Algo:
  Split list in k groups then reverse each
  */
  const groups: LN[][] = new Array(k).fill([]);
  let cur: LN = head;
  let j = 0;
  while (cur != null) {
    groups[j] = [];
    for (let i = k - 1; i >= 0; --i) {
      groups[j][i] = cur;
      if (cur) cur = cur.next as ListNode;
    }
    ++j;
  }

  const list: LN[] = groups.reduce((a, b) => a.concat(b), []).filter(n => n !== null);

  for (let i = 0; i < list.length - 1; ++i) {
    if (list[i]) (list[i] as ListNode).next = list[i + 1];
  }
  return list[0] as ListNode;
};

export default reverseInKGroup;
