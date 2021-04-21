/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    // use stack mind
    let arr = [];
    while(head !== null) {
        arr.push(head.val);
        head = head.next;
    }
    let n = arr.length;
    for (let i = 0; i < (n / 2); i++) {
        if (arr[i] !== arr[n - 1 - i]) {
            return false;
        }
    }
    return true;
};