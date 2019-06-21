class Solution {
  public static ListNode reverseKGroup(ListNode head, int k) {
    ListNode[] reversedNodes = new ListNode[k];
    ListNode current = head;
    int index = k - 1;
    while (index > 0 /* && current.next != null */) {
      System.out.println("current=" + current);
      reversedNodes[index] = current;
      current = current.next;
      //reversedNodes[index].next = current;
      index--;
    }
    for (int i = 0; i < reversedNodes.length; i++) System.out.println("node("+ i + "): " + reversedNodes[i]);
    return reversedNodes[0];
  }

  public static void main(String[] args) {
    ListNode one = new ListNode(1);
    ListNode two = new ListNode(2);
    ListNode three = new ListNode(3);
    ListNode four = new ListNode(4);
    ListNode five = new ListNode(5);
    one.next = two;
    two.next = three;
    three.next = four;
    four.next = five;

    
    ListNode cur = one;
    while (cur != null) {
      System.out.print(cur);
      cur = cur.next;
    }
    System.out.println("");
    System.out.println("Reversed:");
    ListNode rev = reverseKGroup(one, 2);
  }
}