function solution(n) {
    
    const nums = []
    
    for (let i = 1; i <= n; i++) {
        if(n % i === 0) {
            nums.push([i, n/i])
        }
    }
    
    return nums.length
    
    
}