    function sum(num) {
        if(num === 0) return 0;
        
        return num + sum(num-1)
        
    }


function solution(n) {
    
    const t = Math.floor(n / 2) // 더할 횟수
    
    return sum(t) * 2

}