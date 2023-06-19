function combination(arr, n) {
    if(n === 1) return arr.map((v) => [v])
    
    const result = []
    
    arr.forEach((fixed, idx, arr) => {
        const rest = arr.slice(idx + 1)
        const combi = combination(rest, n-1)
        const combine = combi.map((v) => [fixed, ...v])
        
        result.push(...combine)
    })
    
    return result;
}



function solution(numbers) {
    return [...new Set(combination(numbers, 2).map((v) => v[0] + v[1]))].sort((a, b) => a -b)
}