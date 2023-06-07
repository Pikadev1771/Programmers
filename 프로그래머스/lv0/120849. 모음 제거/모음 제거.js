function solution(my_string) {
    let arr = my_string.split('')
    
    return arr.filter(x => x !== 'a' && x !== 'e' && x !== 'i' && x !== 'o' && x !== 'u').join('')
}