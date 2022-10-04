var moveZeroes = function (nums) {
  prevIndx = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      let hold = nums[prevIndx];
      nums[prevIndx] = nums[i];
      nums[i] = hold;
      prevIndx++;
    }
  }
  return nums;
};

const nums = [0, 1, 0, 3, 12];
console.log(moveZeroes(nums));
