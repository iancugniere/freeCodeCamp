#!/usr/bin/node
/*
Check if a string (first argument, str) ends with the given target string (second argument, target).
*/
function confirmEnding(str, target) {
  if (target == str.substring(str.length -target.length)) {
    return true;
  }
  return false;
}

confirmEnding("Bastian", "n");
