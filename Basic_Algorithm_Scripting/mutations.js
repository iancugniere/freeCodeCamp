#!/usr/bin/node
/*
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
Ignoring case.
*/
function mutation(arr) {
  arr = arr.join(' ').toLowerCase();
  arr = arr.split(' ');
  for (i = 0; i < arr[1].length; i++) {
    if (arr[0].indexOf(arr[1][i]) == -1) {
      return false;
    }
  }
  return true;
}
mutation(["hello", "hey"]);
