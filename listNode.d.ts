declare type LN = ListNode | null;
declare class ListNode {
    val: number;
    next: LN;
    constructor(x: number, next?: LN);
    toString(): string;
    print(): string;
}
export default ListNode;
