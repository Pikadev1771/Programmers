function solution(s) {
   let result = [0, 0]
    
    
    while(s.length > 1) {
        
        
    s = s.split('') // 배열 변환
    let ones = s.filter((el) => el === '1').length
    result[0]++
    result[1] += s.length - ones
     s = ones.toString(2)   
    }
    
    return result
        
}