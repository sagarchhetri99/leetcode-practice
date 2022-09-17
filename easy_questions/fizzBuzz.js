//Question:
//Given an integer n, return a string array answer (1-indexed) where:
//answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
//answer[i] == "Fizz" if i is divisible by 3.
//answer[i] == "Buzz" if i is divisible by 5.
//answer[i] == i (as a string) if none of the above conditions are true.
//Link: https://leetcode.com/problems/fizz-buzz/

//Time Complexity: O(n)
var fizzBuzz = function (n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("FizzBuzz");
    } else if (i % 3 === 0) {
      arr.push("Fizz");
    } else if (i % 5 === 0) {
      arr.push("Buzz");
    } else {
      arr.push(i.toString());
    }
  }
  return arr;
};
console.log(fizzBuzz(3));

//Thinking Process:
//1.)Create an empty array "arr" where we push certain words/numbers if conditions are met
//2.)Create a for loop which starts from 1 and ends at n, where if the number n is divisible by 3 and 5 we push the word "FizzBuzz into array "arr"
//3.)If none of the conditions are met then we simply push number n into the array.
//4.)After the iteration of the loop is completed we return the array "arr".
