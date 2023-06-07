function solution(my_string, letter) {
//     const arr = Array.from(my_string)
    
//     return arr.filter(x => x !== letter).join('')
    
    return my_string.split(letter).join('')
}