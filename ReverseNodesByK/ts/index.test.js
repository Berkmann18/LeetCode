const reverseNodes = require('./index').default;
const Node = require('../../listNode').default;

test('Default', () => {
  const one = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))));
  expect(one.toString()).toStrictEqual('1->');
  expect(one.print()).toStrictEqual('1->2->3->4->5');
});

test('k=0', () => {
  const one = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))));
  expect(reverseNodes(one, 0).print()).toEqual('1->2->3->4->5');
});

test('k=1', () => {
  const one = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))));
  expect(reverseNodes(one, 1).print()).toEqual('1->2->3->4->5');
});

test('k=2', () => {
  const one = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))));
  expect(reverseNodes(one, 2).print()).toEqual('2->1->3->4->5');
});

test('k=3', () => {
  const one = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))));
  expect(reverseNodes(one, 3).print()).toEqual('3->2->1->4->5');
});

test('k=4', () => {
  const one = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))));
  expect(reverseNodes(one, 4).print()).toEqual('4->3->2->1->5');
});

test('k=5', () => {
  const one = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))));
  expect(reverseNodes(one, 5).print()).toEqual('5->4->3->2->1');
});

test('[]', () => {
  expect(reverseNodes(null, 2)).toEqual(null);
});
