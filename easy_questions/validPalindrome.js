//Question:
//A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters,
//it reads the same forward and backward. Alphanumeric characters include letters and numbers.
//Given a string s, return true if it is a palindrome, or false otherwise.
//Link: https://leetcode.com/problems/valid-palindrome/

var isPalindrome = function (s) {
  s = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  let leftIndex = 0;
  let rightIndex = s.length - 1;

  while (leftIndex < rightIndex) {
    if (s[leftIndex] !== s[rightIndex]) return false;
    leftIndex++;
    rightIndex--;
  }
  return true;
};

const s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s));

//Thinking Process (Steps):
//1.) I want the string to be all lowercase and also replace all non-alphanumeric characters.
//2.) Will use regex to replace all non-alphanumeric characters with "". /[^a-z0-9]/gi, ""
//3.) Then I want to create leftIndex variable to keep track of left pointer and rightIndex variable to keep track of right pointer.
//4.) Create a while loop until the pointers are equal to each other.
//4a.) Create a conditon to see if values of pointers don't equal to each other, return false.
//4b.) Compare the characters at both left and right index, increment leftIndex and decrement rightIndex.
//5.) (exit loop) and return true when leftIndex is equal to rightIndex.
