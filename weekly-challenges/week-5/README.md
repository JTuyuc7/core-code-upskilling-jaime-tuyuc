# Challenges week - 5

* Fun with lists [File solution](./FunWithLists.js)
```javascript
    function map(head, f) {
        if (!head) return null
        return { data: f(head.data), next: map(head.next, f) }
    }
// Output
// [2,3,6]

```

* Separating Strings [File solution](./SeparatingStrings.js)

```javascript
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

sepStr('Just Live Life Man')
// Output
/*
[
  [ 'J', 'L', 'L', 'M' ],
  [ 'u', 'i', 'i', 'a' ],
  [ 's', 'v', 'f', 'n' ],
  [ 't', 'e', 'e', '' ]
]
*/
```

* Highest Scoring Word [File solution](./HighestScoringWord.js)
```javascript
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

// Output
// volcano
// taxi
```

* Where is my parent [File solution](./WhereIsMyParent.js)

```javascript
function findChildren(dancingBrigade) {
    let splited = dancingBrigade.split('')
    let toUp = 0;
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

// Output
const res1 = findChildren('AaaaaZazzz')
const res2 = findChildren('uwwWUueEe')
console.log(res1)
console.log(res2)

// AaaaaaZzzz
// EeeUuuWww

```