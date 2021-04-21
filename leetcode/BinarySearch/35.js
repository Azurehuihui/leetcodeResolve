/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
   你可以假设数组中无重复元素
   输入: [1,3,5,6], 5
   输出: 2
 */
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let mid;
    // 当left > right 时跳出循环
    // 这是一个左闭右闭区间
    while(left <= right) {
        // 左移符号的优先级比较低， 需要加一个括号
        mid = left + ((right - left) >> 1);
        if (nums[mid] == target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left;
};
debugger
console.log(searchInsert([1,3,5,6], 7))