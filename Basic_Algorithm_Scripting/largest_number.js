#!/usr/bin/node
/*
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
*/
function largestOfFour(arr) {
  let res = -Infinity;
  let myArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (res < arr[i][j]) {
        res = arr[i][j];
      }
    }
    myArr.push(res);
    res = -Infinity;
  }
  return myArr;
}
