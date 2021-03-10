// FIRST BAD VERSION

// You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

// You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

// Example 1:

// Input: n = 5, bad = 4
// Output: 4

// Explanation:
// call isBadVersion(3) -> false
// call isBadVersion(5) -> true
// call isBadVersion(4) -> true
// Then 4 is the first bad version.

// Example 2:
// Input: n = 1, bad = 1
// Output: 1

// Constraints:
// 1 <= bad <= n <= 231 - 1
// JavaScript
/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
/** var solution = function (isBadVersion) {

 * @param {integer} n Total versions
 * @return {integer} The first bad version
//     return function (n) {};
// };
*/

//  * Definition for isBadVersion()

//  * @param {integer} version number

//  * @return {boolean} whether the version is bad

//  * isBadVersion = function(version) {

//  * @param {function} isBadVersion()

//  * @return {function}

// var solution = function (isBadVersion) {
//     //  * @param {integer} n Total versions
//     //  * @return {integer} The first bad version

//     return function (n) {

//     };
// };

// SOLUTION:

// Approach #2 (Binary Search) [Accepted]
// It is not difficult to see that this could be solved using a classic algorithm - Binary search. Let us see how the search space could be halved each time below.

// Scenario #1: isBadVersion(mid) => false

//  1 2 3 4 5 6 7 8 9
//  G G G G G G B B B       G = Good, B = Bad
//  |       |       |
// left    mid    right
// Let us look at the first scenario above where isBadVersion(mid) \Rightarrow falseisBadVersion(mid)⇒false. We know that all versions preceding and including midmid are all good. So we set left = mid + 1left=mid+1 to indicate that the new search space is the interval [mid + 1, right][mid+1,right] (inclusive).

// Scenario #2: isBadVersion(mid) => true

//  1 2 3 4 5 6 7 8 9
//  G G G B B B B B B       G = Good, B = Bad
//  |       |       |
// left    mid    right
// The only scenario left is where isBadVersion(mid) \Rightarrow trueisBadVersion(mid)⇒true. This tells us that midmid may or may not be the first bad version, but we can tell for sure that all versions after midmid can be discarded. Therefore we set right = midright=mid as the new search space of interval [left,mid][left,mid] (inclusive).

// In our case, we indicate leftleft and rightright as the boundary of our search space (both inclusive). This is why we initialize left = 1left=1 and right = nright=n. How about the terminating condition? We could guess that leftleft and rightright eventually both meet and it must be the first bad version, but how could you tell for sure?

// The formal way is to prove by induction, which you can read up yourself if you are interested. Here is a helpful tip to quickly prove the correctness of your binary search algorithm during an interview. We just need to test an input of size 2. Check if it reduces the search space to a single element (which must be the answer) for both of the scenarios above. If not, your algorithm will never terminate.

// If you are setting mid = \frac{left + right}{2}mid=
// 2
// left+right
// ​
//  , you have to be very careful. Unless you are using a language that does not overflow such as Python, left + rightleft+right could overflow. One way to fix this is to use left + \frac{right - left}{2}left+
// 2
// right−left
// ​
//   instead.

// If you fall into this subtle overflow bug, you are not alone. Even Jon Bentley's own implementation of binary search had this overflow bug and remained undetected for over twenty years.

// Complexity analysis

// Time complexity : O(\log n)O(logn). The search space is halved each time, so the time complexity is O(\log n)O(logn).

// Space complexity : O(1)O(1).

// Written in Java

// public int firstBadVersion(int n) {
//     int left = 1;
//     int right = n;
//     while (left < right) {
//         int mid = left + (right - left) / 2;
//         if (isBadVersion(mid)) {
//             right = mid;
//         } else {
//             left = mid + 1;
//         }
//     }
//     return left;
// }

// firstBadVersion(n)

var solution = function (isBadVersion) {
    //  * @param {integer} n Total versions
    //  * @return {integer} The first bad version

    return function firstBadVersion(n) {
        let left = 1;
        let right = n;
        while (left < right) {
            let mid = left + Math.floor((right - left) / 2);
            if (isBadVersion(mid)) {
                right = mid;
            } else left = mid + 1;
        }
        return left;
    };
};
