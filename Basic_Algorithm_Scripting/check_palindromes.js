#!/usr/bin/node
/*
Return true if the given string is a palindrome. Otherwise, return false.
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.
*/
function palindrome(str) {
  str = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
  let i = 0;
  let j = str.length - 1;
  while (i != j) {
    if (str[i] == str[j]) {
      i++;
      j--;
    }
    if (str[i] != str[j]) {
      return false;
    }
  }
  return true;
}

palindrome("eye");
