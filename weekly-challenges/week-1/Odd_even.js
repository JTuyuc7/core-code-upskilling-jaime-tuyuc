/*
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).
*/

// Even = par
// Odd = impar

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