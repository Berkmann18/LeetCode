System.register([], function(exports_1, context_1) {
  'use strict';
  var ListNode;
  var __moduleName = context_1 && context_1.id;
  return {
    setters: [],
    execute: function() {
      ListNode = class ListNode {
        constructor(x, next = null) {
          this.val = -9999;
          this.val = x;
          this.next = next;
        }
        toString() {
          const fw = this.next != null ? '->' : '';
          return `${this.val}${fw}`;
        }
      };
      exports_1('default', ListNode);
    }
  };
});
