//Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//An input string is valid if:
//1.Open brackets must be closed by the same type of brackets.
//2.Open brackets must be closed in the correct order.
//3.Every close bracket has a corresponding open bracket of the same type.
//Link: https://leetcode.com/problems/valid-parentheses/

//Time complexity: O(n)
var isValid = function (s) {
  let map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  let stack = [];
  for (let ch of s) {
    if (map[ch]) {
      //   pushing matching closing bracket first
      stack.push(map[ch]);
      //   console.log(`stack at ${ch}: ${stack} is pushed`);
    } else if (stack.length > 0 && stack[stack.length - 1] == ch) {
      //   if we have a matching closing bracket to the one we pushed earlier, we simply pop it.
      stack.pop();
      //   console.log(`stack at ${ch}: ${stack} is popped`);
    } else return false;
  }
  return stack.length == 0;
  //   if all values are popped i.e stack is empty, we have valid set of parentheses.
};

let s = "([{}])";
console.log(isValid(s));

//Thinking Process:
//1.) Create a hash map where the key is the opening bracket and the corresponding value is the closing bracket.
//2.) Also create a stack where we can push corresponding closing brackets as it iterates along the string.
//3.) If the stack is not empty and the
