//Question:
//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.
//You can return the answer in any order.
//Link: https://leetcode.com/problems/two-sum/

//Brute Force Option
//Time Complexity: O(n^2)
var twoSum_BruteForce = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++)
      if (nums[i] + nums[j] === target) {
        return nums[(i, j)];
      }
  }
};

//Using Hash Map Option
//Time Complexity: O(n)
var twoSum_HashMap = function (nums, target) {
  const hashMap = new Map();
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    let num1 = nums[i];
    let num2 = target - num1;
    if (hashMap.has(num2)) {
      return [i, hashMap.get(num2)];
    }
    hashMap.set(num1, i);
  }
};

const nums = [2, 7, 11, 15];

console.log(twoSum_BruteForce(nums, 9));
console.log(twoSum_HashMap(nums, 9));

//Thinking Process (Steps):
//-I can try brute force the solution by using 2 for loops which iterates over the array however the time complexity is O(n^2).
//-Use Hash map to reduce time complexity:
//-We can calculate the compliment pair at each index in the array by using the target number minus the current value at index i.
//-Then record it's compliment pair and it's index into the hash map if the hash map doesn't have the compliment pair. Hash map = {7:0, 2:1}
//-If hash map does contain the compliment pair, return the current index and the index of the compliment pair.
