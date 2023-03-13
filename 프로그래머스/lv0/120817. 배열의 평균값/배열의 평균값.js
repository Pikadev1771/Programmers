function solution(numbers) {
    let result = numbers.reduce(
        function add(sum, cur) {
        return sum + cur
    }, 0)
    
    return result / (numbers.length);
}