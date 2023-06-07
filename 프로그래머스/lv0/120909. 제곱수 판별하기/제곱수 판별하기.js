function solution(n) {
    // return ~~(Math.sqrt(n)) * ~~(Math.sqrt(n)) === n ? 1 : 2
    
    return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
}