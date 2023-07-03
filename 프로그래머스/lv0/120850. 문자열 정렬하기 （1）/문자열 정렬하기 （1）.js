function solution(my_string) {
    return my_string.split('').map(el => parseInt(el)).filter(el => !isNaN(el)).sort((a, b) => a - b)
}