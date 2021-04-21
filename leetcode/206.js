/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // 递归
    // if (head == null || head.next == null) {
    //     return head;
    // }

    // let curNode = reverseList(head.next);
    // head.next.next = head;
    // head.next = null;
    // return curNode;
    // 迭代
    let prev = null;
    let cur = head;
    let next = head;
    while(cur) {
        // 保留下一个节点
        next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return prev;
};
