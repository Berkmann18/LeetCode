declare type LN = ListNode | null;
declare class ListNode {
  public val: number;
  public next: LN;
  public constructor(x: number, next?: LN);
  public toString(): string;
  public print(): string;
}
export default ListNode;
