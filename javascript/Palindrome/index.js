// write on palindrome program in javascript?
// 
// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward, such as madam or racecar.

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

console.log(isPalindrome('madam')); // true
console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('hello')); // false