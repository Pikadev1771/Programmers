function solution(my_string) {
    const reverse = []
    
    let arr = my_string.split('')
    
    while(arr.length) {
        reverse.push(arr.pop())
    }
    
    return reverse.join('')
}