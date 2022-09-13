# core-code-upskilling-jaime-tuyuc
Repository for Bootcamp Core Code Upskilling

# Week 1 challenges
[Ensure question](weekly-challenges\week-1\ensure_question.js) Return the string with the "?" at the end of the string.

* First approach
<pre><code> 
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
</code> </pre>

[Ensure question second approach](weekly-challenges\week-1\ensure_question1.js)

* Second approach
<pre><code> 
function ensureQuestion(s) {
    return s.endsWith('?') ? s : s + '?'
}

console.log(ensureQuestion('yes'))
console.log(ensureQuestion('No?'))

// Output 
// yes?
// no?
</code> </pre>

[Reverse sentence](weekly-challenges\week-1\reversed_word.js) Return the String with the reverse string. 

<pre><code> 
function reverseWords(str){
    return str.split(" ").reverse().join(" ")
}

console.log(reverseWords("The greatest victory is that which requires no battle"))

// Output 
// battle no requires which that is victory greatest The
</code> </pre>

[Smallest integer](weekly-challenges\week-1\smalles_integer.js) Find the Smallest number on an array list

<pre><code> 
function findSmallestInt(args) {
    return Math.min(...args)
}

console.log(findSmallestInt([34, 15, 88, 2]))
console.log(findSmallestInt([34, -345, -1, 100]))

// Output 
// 2
// -345
</code> </pre>


[Even or Odd](weekly-challenges\week-1\Odd_even.js) Return if the sum of the numbers returns Orr or Even

<pre>
<code>
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
</code>
</pre>