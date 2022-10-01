# Challenges week - 4

* Two to one
[File solution](./TwoToOne.js)

```javascript
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
```

* Leap year
[File solution](./LeapYear.js)
```javascript
function isLeapYear(year) {
    if((year % 4 === 0) && (year % 100 != 0) || (year % 400 === 0)){
        return true
    }

    return false
}

isLeapYear(1234)
isLeapYear(1884)
// Output
// false
// true
```

Maximun length difference
```javascript
let a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
let a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]


function mxdiflg(a1, a2) {
    if (a1.length === 0 || a2.length === 0) return -1
    let l1 = a1.map(str => str.length)
    let l2 = a2.map(str => str.length)
    return Math.max(Math.max(...l1) - Math.min(...l2), Math.max(...l2) - Math.min(...l1))
}

mxdiflg(a1, a2)

// Output
// 13
```

* Base64 Numeric Translator

```javascript
// Unable to complete the solution

let base64_to_base10 = (str) => {
  let base = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  return str.split('').reduce((p, c) => p * 64 + base.indexOf(c), 0);
};

// This is the solution from the repository


```