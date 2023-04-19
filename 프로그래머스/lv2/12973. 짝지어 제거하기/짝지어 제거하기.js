function solution(s) {
   
    const stack = [];
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] !== stack[stack.length -1] || stack.length === 0) {
            stack.push(s[i])
        } else if(s[i] === stack[stack.length -1]) {
            stack.pop()
        }
    }
    
    return stack.length ? 0 : 1

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')

}