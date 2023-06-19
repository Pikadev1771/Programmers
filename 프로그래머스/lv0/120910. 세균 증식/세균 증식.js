function solution(n, t) {
    
    let temp = 1;
    
    for(let i = 0; i<t; i++) {
        temp = temp * 2
    }
    
    return n * temp
}