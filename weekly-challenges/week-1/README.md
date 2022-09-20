
# Challenges week 1

Return the string with the "?" at the end of the string.
- [Source code](./ensure_question.js)
```javascript
function ensureQuestion(s) {
    
    const lastElement = s.split('')
    if(lastElement[lastElement.length - 1] === '?') {
        return s
    }
    return s + '?'
}
console.log(ensureQuestion('yes'))
console.log(ensureQuestion('No?'))
// Output 
// yes?
// no?
```

Return the string with the "?" at the end of the string.
[Source code](./ensure_question1.js)
```javascript
function ensureQuestion(s) {
    return s.endsWith('?') ? s : s + '?'
}

console.log(ensureQuestion('yes'))
console.log(ensureQuestion('No?'))

// Output 
// yes?
// no?
```

Return the String with the reverse string. 
[Source code](./reversed_word.js)
```javascript
function reverseWords(str){
    return str.split(" ").reverse().join(" ")
}

console.log(reverseWords("The greatest victory is that which requires no battle"))

// Output 
// battle no requires which that is victory greatest The
```

Find the Smallest number on an array list
[Source code](./smalles_integer.js)
```javascript
function findSmallestInt(args) {
    return Math.min(...args)
}

console.log(findSmallestInt([34, 15, 88, 2]))
console.log(findSmallestInt([34, -345, -1, 100]))

// Output 
// 2
// -345
```


Return if the sum of the numbers returns Orr or Even
[Source code](./Odd_even.js)
```javascript
function oddOrEven(array) {
    //enter code here
    let temp = 0
    if(array.length === 0) {
        return 'even'
    }

    for( i = 0; i < array.length; i ++) {
        temp += array[i]
    }

    if(Math.abs(temp) % 2 === 0) {
        return 'even'
    }else { 
        return 'odd'
    }
}

console.log(oddOrEven([]))
console.log(oddOrEven([0, 1, 4]))
console.log(oddOrEven([0, -1, -5]))

// Output
// even
// odd
// even
```
