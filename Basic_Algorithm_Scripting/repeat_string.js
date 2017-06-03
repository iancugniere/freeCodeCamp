#!/usr/bin/node
/*
Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.
*/
function repeatStringNumTimes(str, num) {
  if (num >= 1) {
    str = str.repeat(num);
    return str;
  }
  return "";
};

repeatStringNumTimes("abc", 3);
