function solution(num_list) {
    const reverse = []
    
    while(num_list.length) {
        reverse.push(num_list.pop())
    }
    
    return reverse
}