/*
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.
*/

function isPalindrome(line) {
    line = line.toString().toLowerCase().replace(/[W_]/g, '')
    
    for(var i = 0, len = line.length; i < len/2; i++){
        if(line[i] !== line[len-1]) {
            return false
        }
        return true
    }
    
}

console.log(isPalindrome('anna'))
console.log(isPalindrome('walter'))
console.log(isPalindrome(12321))
console.log(isPalindrome(123456))

// Output
// true
// false
// true
// false

function isPalindromeRefactor(line) {
    let lower = line.toString().toLowerCase()
    const forward = lower
    const back = lower.split('').reverse().join('')
    return forward === back
}