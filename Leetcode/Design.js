// Given an integer array nums, design an algorithm to randomly shuffle the array.

// Implement the Solution class:

// Solution(int[] nums) Initializes the object with the integer array nums.
// int[] reset() Resets the array to its original configuration and returns it.
// int[] shuffle() Returns a random shuffling of the array.

// Example 1:

// Input
// ["Solution", "shuffle", "reset", "shuffle"]
// [[[1, 2, 3]], [], [], []]
// Output
// [null, [3, 1, 2], [1, 2, 3], [1, 3, 2]]

// Explanation
// Solution solution = new Solution([1, 2, 3]);
// solution.shuffle();    // Shuffle the array [1,2,3] and return its result. Any permutation of [1,2,3] must be equally likely to be returned. Example: return [3, 1, 2]
// solution.reset();      // Resets the array back to its original configuration [1,2,3]. Return [1, 2, 3]
// solution.shuffle();    // Returns the random shuffling of array [1,2,3]. Example: return [1, 3, 2]

// Constraints:

// 1 <= nums.length <= 200
// -106 <= nums[i] <= 106
// All the elements of nums are unique.
// At most 5 * 104 calls will be made to reset and shuffle.

// Hint #1:
// The solution expects that we always use the original array to shuffle() else some of the test cases fail. (Credits; @snehasingh31)
/**
 * @param {number[]} nums
 */

let nums = [1, 2, 3];

var Solution = function (nums) {
  this.nums = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  const copy = this.nums;
  return copy;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  let s = [];
  this.nums.forEach((val, key) => s[key] = val);
  let m = s.length,
    t,
    i;
  // While elements to shuffle remain...
  while (m) {
    // Pick a remaining element...
    i = Math.floor(Math.random() * m--);

    // Then swap it with the current element...
    t = s[m];
    s[m] = s[i];
    s[i] = t;
  }
  return s;
};

//  * Your Solution object will be instantiated and called as such:
var obj = new Solution(nums);
var param_1 = obj.reset();
var param_2 = obj.shuffle();


var Solution = function(nums) {
  // hold nums in Solution
  this.nums = nums;
  this.orig = [...this.nums]
};

Solution.prototype.reset = function() {
  this.nums = this.orig
  return this.nums;
};

Solution.prototype.shuffle = function() {
  // create a copy of this.nums, shuffle it, and return it
  let shuffled = []
  
  const shuffled = this.nums.slice();

  // swap elements with random elements
  for (let i = 0; i < shuffled.length; i++) {
      let randInt = Math.floor((Math.random()) * (shuffled.length));
      let tmp = shuffled[i];
      shuffled[i] = shuffled[randInt];
      shuffled[randInt] = tmp;
  }
      
  
  return shuffled;
};