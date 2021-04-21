/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
   如果数组中不存在目标值 target，返回 [-1, -1]。
    输入：nums = [5,7,7,8,8,10], target = 8
    输出：[3,4]
 */
var searchRange = function(nums, target) {
    // let result = [];
    // let left;
    // let right;
    // let mid;
    // // 找左边界
    // function leftBind(nums, target) {
    //     left = 0;
    //     right = nums.length - 1;
    //     while (left < right) {
    //         mid = left + ((right - left) >> 1);
    //         if (nums[mid] < target) {
    //             left = mid + 1;
    //         } else {
    //             right = mid;
    //         }
    //     }
    //     console.log("left ", right);
    //     return right;
    // }
    // // 找右边界
    // function rightBind(nums, target) {
    //     left = 0;
    //     right = nums.length - 1;
    //     while (left <= right) {
    //         mid = left + ((right - left) >> 1);
    //         if (nums[mid] <= target) {
    //             left = mid + 1;
    //         } else {
    //             right = mid - 1;
    //         }
    //     }
    //     console.log("rihgt ", left);
    //     return left;
    // }
    // if (nums.length == 0) {
    //     return [-1, -1];
    // }
    // let l = leftBind(nums, target);
    // let r = rightBind(nums, target);
    // if (l >= nums.length || nums[l] != target) return [-1, -1];
    // else result.push(l);

    // if ((r - 1) < 0 || nums[r - 1] != target) return [-1, -1];
    // else result.push(r - 1);

    // return result;
    let upper = upperBound(nums, target);
    let lower = lowerBound(nums, target);
    if (upper < lower) {
        return [-1, -1];
    }
    return [lower, upper]
    function lowerBound(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        while (left <= right) {
            let mid = left + ((right - left) >> 1);
            if (target <= nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }
    function upperBound(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        while (left <= right) {
            let mid = left + ((right - left) >> 1);
            if (target >= nums[mid]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return right;
    }
};
debugger
console.log(searchRange([5,7,7,8,8,10], 5))


