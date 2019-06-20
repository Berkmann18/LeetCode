declare type LN = ListNode | null;
declare class ListNode {
  public val: number;
  public next: LN | undefined;
  public constructor(x: number, next?: LN);
  public toString(): string;
}
export default ListNode;
