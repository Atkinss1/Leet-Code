// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const numsMap = new Map();
  for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (numsMap.has(complement)) {
          return [numsMap.get(complement), i];
      }
      numsMap.set(nums[i], i);
  }
};

/**
 * NOTES:
 * Better understanding of .has() and .get() methods
 * 
 * .has() returns a boolean value if the key is present or not in an object
 * .get() returns the value when calling the key of the key:value pair in an object
 *  */ 