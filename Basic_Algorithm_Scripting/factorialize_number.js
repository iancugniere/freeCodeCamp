#!/usr/bin/node
/*
Return the factorial of the provided integer.
*/
function factorialize(num) {
  if (num == 1 || num == 0) {
    return 1;
  }
  let res = num - 1;
  while (res > 1) {
    num *= res;
    res--;
  }
  return num;
}

factorialize(5);
