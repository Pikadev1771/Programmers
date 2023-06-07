function solution(s1, s2) {
  let count = 0;
    
    for(el of s1) {
        if(s2.indexOf(el) !== -1) count++
    }
    
    return count;
}