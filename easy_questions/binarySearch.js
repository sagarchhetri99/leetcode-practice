//Question:
//Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums.
//If target exists, then return its index. Otherwise, return -1.
//You must write an algorithm with O(log n) runtime complexity.
//Link: https://leetcode.com/problems/binary-search/

//Time Complexity: O(n)
var On_search = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }
  return -1;
};

//Time Complexity: O(log n)
var Ologn_search = function (nums, target) {
  let leftPointer = 0;
  let rightPointer = nums.length - 1;

  while (leftPointer <= rightPointer) {
    let mid = Math.floor((leftPointer + rightPointer) / 2);
    let matched = nums[mid];
    if (matched === target) {
      return mid;
    } else if (matched > target) {
      rightPointer = mid - 1;
    } else {
      leftPointer = mid + 1;
    }
    sssssssss;
  }
  return -1;
};

const nums = [-1, 0, 3, 5, 9, 12];
console.log(On_search(nums, 9));
console.log(Ologn_search(nums, 9));

//Thinking Process:
//1.) Since the array is sorted in ascending order I want to create left and right pointers.
//2.) Create a while loop for while left <= right.
//3.) First compare the middle of the array to the target, if it's greater than the target then look only to the left side and vice-versa.
//4a.) Create a middle variable by addiing left and right divided by 2 and round it down.
//4b.) Also create a matching variable with index of middle.
//4c.) Then create a if condition where matching variable = target, then return the index of middle.
//4d.) Also create if condition where matching variable is greater than target, change right pointer to middle -1.
//4d.) Also create if condition where matching variable is less than target, change right pointer to middle +1.
//5.) Return -1 if no match is found.
