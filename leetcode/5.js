/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let n = s.length;
    let maxL = 0; // 记录最长回文串的长度
    let start = 0; // 记录最长回文串的下标
    // dp用来记录子串是否为回文串
    let dp = Array.from(Array(n), () => new Array(n));
    // 对于每个字符，他自己也是一个回文串
    for (let i = 0; i < n; i++) {
        dp[i][i] = 1;
    }
    if (n == 0 || n == 1) {
        return s;
    }
    // 
    for (let i = 1; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            if (s[j] == s[i]) {
                // 对于 aba 或者 bb这样，可以直接判断当前的子字符串就是回文串
                if ( i - j < 3) {
                    dp[j][i] = 1;
                } else { // 对于长度超过3的需要判断其子串是否是回文串
                    dp[j][i] = dp[j + 1][i - 1];
                }
            }
            // 如果j->i是回文串，更新最长回文串的长度
            if (dp[j][i]) {
                // 每遍历完一组就更新长度
                if (maxL < (i - j + 1)) {
                    maxL = i - j + 1;
                    start = j;
                }
            }           
            
        }
    }
    return s.substr(start, maxL);
};
debugger
// 未跑过的用例 “ac”
console.log(longestPalindrome("babad"));