/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let firstRunner = head;
  let secondRunner = head;
  for (let i = 0; i < n; i++) firstRunner = firstRunner.next;
  if (!firstRunner) return head.next;
  while (firstRunner.next)
    (firstRunner = firstRunner.next), (secondRunner = secondRunner.next);
  console.log(secondRunner.val); // => 3
  console.log(head); // => [1,2,3,4,5]
  secondRunner.next = secondRunner.next.next;
  return head;
};

//1 => 2 => 3 => 4 => 5 => 6
