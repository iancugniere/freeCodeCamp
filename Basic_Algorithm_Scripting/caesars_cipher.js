#!/usr/bin/node
/*
ROT13
*/
function rot13(str) {
  str = str.split('');
  newString = '';
  for (i = 0; i < str.length; i++) {
    if (str[i] >= 'A' && str[i] <= 'M') {
      str[i] = str[i].charCodeAt() + 13;
    }
    else if (str[i] >= 'N' && str[i] <= 'Z') {
      str[i] = str[i].charCodeAt() - 13;
    }
    else {
      str[i] = str[i].charCodeAt();
    }
    newString += String.fromCharCode(str[i]);
  }
  return newString;
}

rot13("SERR YBIR?");
