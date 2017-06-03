#!/usr/bin/node
/*
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
*/
function getIndexToIns(arr, num) {
  let i = 0;
  arr = arr.sort(function(a, b){return a-b});
  while (num > arr[i]) {
    i++;
  }
  return i;
}

getIndexToIns([40, 60], 50);
