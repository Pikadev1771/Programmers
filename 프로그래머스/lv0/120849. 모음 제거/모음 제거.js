function solution(my_string) {
    let arr = my_string.split('')
    
    return arr.filter(x => !['a', 'e', 'i', 'o', 'u'].includes(x)).join('')
}