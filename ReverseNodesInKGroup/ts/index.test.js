const reverseNodes = require('./index').default;
const Node = require('./listNode').default;
const one = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))));

test('Default', () => {
  expect(one.toString()).toStrictEqual('1->');
  expect(one.print()).toStrictEqual('1->2->3->4->5');
});

// test('k=0', () => {
//     expect(reverseNodes(one, 0)).toEqual('1->');
// })
