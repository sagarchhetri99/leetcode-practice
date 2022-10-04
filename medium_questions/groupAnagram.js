//Question:
//Given an array of strings strs, group the anagrams together. You can return the answer in any order.
//An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
//typically using all the original letters exactly once.
//Link: https://leetcode.com/problems/group-anagrams/

var groupAnagrams = function (strs) {
  hashMap = {};
  for (s of strs) {
    const keyStr = s.split("").sort().join("");
    if (hashMap[keyStr]) {
      hashMap[keyStr].push(s);
    } else {
      hashMap[keyStr] = [s];
    }
  }
  return Object.values(hashMap);
};

var groupAnagrams2 = function (strs) {
  const sortStr = strs.map((str) => str.split("").sort().join(""));
  hashMap = {};

  for (let i = 0; i < strs.length; i++) {
    if (!hashMap[sortStr[i]]) {
      hashMap[sortStr[i]] = [strs[i]];
    } else {
      hashMap[sortStr[i]].push(strs[i]);
    }
  }
  return Object.values(hashMap);
};

const strs1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
const strs2 = [""];
const strs3 = ["a"];
console.log(groupAnagrams2(strs1));
console.log(groupAnagrams2(strs2));
console.log(groupAnagrams2(strs3));
