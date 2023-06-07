function solution(dot) {
   // return dot[0] > 0 && dot[1] > 0 ? 1 : dot[0] < 0 && dot[1] > 0 ? 2 : dot[0] < 0 && dot[1] < 0 ? 3 : 4
    

    const [num1, num2] = dot
    
    return num1 * num2 > 0 ? (num1 > 0 ? 1 : 3) : (num2 > 0 ? 2 : 4)
}