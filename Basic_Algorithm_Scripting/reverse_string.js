#!/usr/bin/node
/*
Reverse the provided string.
*/
function reverseString(str) {
  let res = "";
  for (i = str.length - 1; i > -1; i--) {
    res = res.concat(str[i]);
  }
  return res;
};

reverseString("hello");
