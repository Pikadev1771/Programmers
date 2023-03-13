function solution(s) {
   let arr = [];
    
    for ( el of s) {
        if(s.indexOf(el) === s.lastIndexOf(el)) {
            arr.push(el)
        }
    }
    
    return arr.sort().join('');
}