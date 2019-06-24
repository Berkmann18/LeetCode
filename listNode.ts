type LN = ListNode | null;

class ListNode {
  public val: number = -9999;
  public next: LN;
  public constructor(x: number, next: LN = null) {
    this.val = x;
    this.next = next;
  }

  public toString(): string {
    const fw: string = this.next != null ? '->' : '';
    return `${this.val}${fw}`;
  }

  public print(): string {
    let current: LN = this;
    let out = '';
    while (current != null) {
      out += current;
      current = current.next as LN;
    }
    // console.log(out);
    return out;
  }
}

export default ListNode;
