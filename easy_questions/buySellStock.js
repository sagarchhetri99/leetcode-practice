//Question:
//You are given an array prices where prices[i] is the price of a given stock on the ith day.
//You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
//Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
//Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

//Brute force method:
//Time Complexity: O(n^2)
var bruteForceMaxProfit = function (prices) {
  if (prices.length === 0) return 0;

  let maxProf = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      maxProf = Math.max(maxProf, prices[j] - prices[i]);
    }
  }
  return maxProf;
};

//Time Complexity: O(n)
var maxProfit = function (prices) {
  if (prices.length === 0) return 0;

  let maxProf = 0;
  let buyPrice = prices[0];

  for (let i = 0; i < prices.length; i++) {
    buyPrice = Math.min(buyPrice, prices[i]);
    // console.log("buyPrice:", buyPrice);
    maxProf = Math.max(maxProf, prices[i] - buyPrice);
    // console.log("maxProf:", maxProf);
  }
  return maxProf;
};

const prices = [7, 1, 5, 3, 6, 4];
console.log(bruteForceMaxProfit(prices));
console.log(maxProfit(prices));

//Thinking process:
//There is a brute force method where you can use nested loop but there is a better solution.
//Rather than having a nested loop you can just iterate the array once by having a buyprice variable and maxprof variable and these are updated every iteration.
//buyPrice variable is initialised at index 0 and is the minimum out of (buyPrice and current index).
//maxProf variable is initialised at 0 and is the maximum out of (maxProf and current index minus the buyPrice)
//After the iteration is complete, return the maxProf.
