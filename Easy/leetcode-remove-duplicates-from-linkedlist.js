var deleteDuplicates = function (head) {
  let pointer = head;

  while (pointer) {
    if (pointer.next && pointer.val == pointer.next.val) {
      pointer.next = pointer.next.next;
    } else {
      pointer = pointer.next;
    }
  }
  return head;
};
