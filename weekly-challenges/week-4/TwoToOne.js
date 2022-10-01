/*
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
*/

function longest(s1, s2) {
    let result1 = s1.split('')
    let result2 = s2.split('')
    let result3 = [...result1, ...result2]
    
    let nonRepeated = [...new Set(result3)]
    return nonRepeated.sort().join('')
}

let a = "xyaabbbccccdefww"
let b = "xxxxyyyyabklmopq"


longest(a, b)

// Output
// 'abcdefklmopqwxy'