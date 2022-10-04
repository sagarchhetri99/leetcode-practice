// var reverse = function (x) {
//   const intSplit = x.toString().split("");
//   let left = 0;
//   let right = intSplit.length - 1;
//   for (num in intSplit) {
//     if (intSplit[num] === "-") {
//       left++;
//       continue;
//     }
//     while (left < right) {
//       let hold = intSplit[left];
//       intSplit[left] = intSplit[right];
//       intSplit[right] = hold;
//       left++;
//       right--;
//     }
//   }
//   return intSplit.join("");
// };

var reverse = function (x) {
  const limit = Math.pow(2, 31);
  const negTest = x < 0 ? -1 : 1;
  x = x.toString();

  let res = "";
  for (let i of x) {
    res = i + res;
  }
  res = parseInt(res);
  return res > limit ? 0 : res * negTest;
};

const s = -123;
console.log(reverse(s));
