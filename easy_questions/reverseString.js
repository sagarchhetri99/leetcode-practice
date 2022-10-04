var reverseString = function (s) {
  leftPointer = 0;
  rightPointer = s.length - 1;

  while (leftPointer < rightPointer) {
    let hold = s[leftPointer];
    s[leftPointer] = s[rightPointer];
    s[rightPointer] = hold;
    leftPointer++;
    rightPointer--;
  }
  return s;
};
const s = ["h", "e", "l", "l", "o"];
console.log(reverseString(s));
