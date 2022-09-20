/*
For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
*/

function well(x){
    let gIdeas = 0
    
    for(ele in x) {
        if(x[ele] === 'good') {
            gIdeas += 1
        }
    }
    
    if(gIdeas === 0 ){
        return 'Fail!'
    } else if ( gIdeas > 0 && gIdeas <= 2) {
        return 'Publish!'
    } else {
        return 'I smell a series!'
    }
    
}

console.log(well(['bad', 'bad', 'bad']))
console.log(well(['good', 'bad', 'bad', 'bad', 'bad']))
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']))

// Output
// Fail!
// Publish!
// I smell a series