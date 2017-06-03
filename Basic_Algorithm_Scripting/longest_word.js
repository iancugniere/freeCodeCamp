#!/usr/bin/node
/*
Return the length of the longest word in the provided sentence.
*/
function findLongestWord(str) {
  str = str.split(' ');
  let res = '';
  for (i = 0; i < str.length; i++) {
    if (res < str[i].length) {
      res = str[i].length;
    }
  }
  return res;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
