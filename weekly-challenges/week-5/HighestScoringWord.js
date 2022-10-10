

function highF(x){
    let words = x.split(' ');
    let dataResult = []
    for( w in words ){
        let result = getLeters(words[w]);
        dataResult.push(result)
    }
    let maxValue = Math.max(...dataResult)
    let idx = dataResult.indexOf(maxValue);
    return words[idx]
}

function getLeters(w){
    let total = 0;
    for(l in w){
        total = total + w.charCodeAt(l) - 96
    }
    return total;
}

highF('what time are we climbing up the volcano')
highF('man i need a taxi up to ubud')