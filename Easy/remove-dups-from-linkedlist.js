// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  // Write your code here.
  let runner = linkedList;

  while (runner) {
    if (runner.next && runner.value == runner.next.value) {
      runner.next = runner.next.next;
    } else {
      runner = runner.next;
    }
  }
  return linkedList;
}
