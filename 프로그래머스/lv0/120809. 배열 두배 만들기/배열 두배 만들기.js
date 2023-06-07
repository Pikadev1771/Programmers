function solution(numbers) {
    
    // return numbers.map(number => number * 2)
    return numbers.reduce((acc, cur) => [...acc, cur * 2], [])
}