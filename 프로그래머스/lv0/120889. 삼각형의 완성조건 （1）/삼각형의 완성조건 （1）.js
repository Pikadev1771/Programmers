function solution(sides) {
    
//     const max = Math.max(...sides) // 가장 긴 변
    
//     const sum = sides.reduce((acc, cur) => acc + cur)
    
//     return sum > max * 2 ? 1 : 2
    
    sides.sort((a, b) => b - a)
    
    return sides[0] < sides[1] + sides[2] ? 1 : 2
    
    
    

}