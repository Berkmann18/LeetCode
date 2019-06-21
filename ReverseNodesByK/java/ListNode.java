public class ListNode {
  int val;
  ListNode next;
  ListNode(int x) { val = x; }

  public String toString() {
    String fw = (next != null) ? "->" : "";
    return Integer.toString(val) + fw;
  }
}