/*
Create a function that takes a string and separates it into a sequence of letters.

The array will be formatted as so:
*/

function sepStr(str) {

    const words = str.split(' ');
    const subArrLengths = []
    let result1 = []                                                                        
    for( ele in words ){
        subArrLengths.push(words[ele].length)
    }
    let long = Math.max(...subArrLengths);
    
    for( let i = 0; i < long; i++){
        let result = words.map((w) => w[i] || '')
        result1.push(result)
    }
    return result1
}