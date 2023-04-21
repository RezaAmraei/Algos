/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  // create two vars, runner and middle
  let runner = (middle = head);

  //while loop to traverse linked list
  while (runner && runner.next !== null) {
    //each iteration move rnner by 2 and middle by 1
    middle = middle.next;
    runner = runner.next.next;
  }

  //once runner === null return middle value
  return middle;
};
