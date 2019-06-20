type LN = ListNode | null;

class ListNode {
  public val: number = -9999;
  public next: LN | undefined;
  public constructor(x: number, next: LN = null) {
    this.val = x;
    this.next = next;
  }

  public toString(): string {
    const fw: string = this.next != null ? '->' : '';
    return `${this.val}${fw}`;
  }
}

export default ListNode;
