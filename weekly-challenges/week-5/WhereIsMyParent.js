


function findChildren(dancingBrigade) {
    let splited = dancingBrigade.split('')
    let tempArrSorted = []
    let finalResult = []
    for(l in splited){
        if(splited[l] === splited[l].toUpperCase()){
            tempArrSorted.push(splited[l])
        }
    }
    tempArrSorted.sort()
    for(let j =0; j < tempArrSorted.length; j ++){
        let res = getAllByletters(splited, tempArrSorted[j])
        finalResult.push(res)
    }
    return finalResult.join('')
}

function getAllByletters(arr, l){
    let result = arr.map( (le) => le === l.toLowerCase() ? le : '' )
    return l.concat(result.join(''))
}

const res1 = findChildren('AaaaaZazzz')
const res2 = findChildren('uwwWUueEe')
console.log(res1)
console.log(res2)

// AaaaaaZzzz
// EeeUuuWww
