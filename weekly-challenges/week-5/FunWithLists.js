
// My solution
function map(head, f) {

    let tempHead = []
    if(!head){
        tempHead = []
    }else {
        tempHead.push(head.data)
        let current = head.next;

        while(current) {
            tempHead.push(current.data)
            current = current.next;
        }

      tempHead = tempHead.map( (ele) => ele * 2)
    }
    
    return !head ? [] : tempHead
}

function map(head, f) {
    if (!head) return null
    return { data: f(head.data), next: map(head.next, f) }
}