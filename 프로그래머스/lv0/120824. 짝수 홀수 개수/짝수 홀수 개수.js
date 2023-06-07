function solution(num_list) {
    const evens = num_list.filter(num => num % 2 === 0).length
    const odds = num_list.length - evens
    
    return [evens, odds]
}