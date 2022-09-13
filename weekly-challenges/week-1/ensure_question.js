
//Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.

function ensureQuestion(s) {
    
    const lastElement = s.split('')
    if(lastElement[lastElement.length - 1] === '?') {
        return s
    }
    return s + '?'
}

console.log(ensureQuestion('yes'))
console.log(ensureQuestion('No?'))