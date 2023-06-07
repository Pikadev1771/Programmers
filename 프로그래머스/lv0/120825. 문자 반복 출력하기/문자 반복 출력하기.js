function solution(my_string, n) {
    // return [...my_string].map(x => {
    //     let str = x
    //     for(let i = 1; i < n; i++) {
    //         str += x
    //     }
    //     return str
    // }).join('')
    
    return [...my_string].map(x => x.repeat(n)).join('')
}