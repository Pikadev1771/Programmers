function solution(rows, columns, queries) {
   const result = []
   
   // 행렬 만들기
   let arr = Array.from(new Array(rows+1), () => new Array(columns+1).fill(0))
   
   for(let i = 1; i <= rows; i++) {
       for (let j = 1; j <= columns; j++) {
           arr[i][j] = (i-1) * columns + j
       }
   }
    
   for(let q = 0; q < queries.length; q++) {
       const [x1, y1, x2, y2] = queries[q]
       const stack = [] // 변하는 수 배열 (순서대로)
       
       // 각 사각형 (마지막 제외) 돌면서 stack 배열 채우기
       for(let i = y1; i < y2; i++) { // 상
           stack.push(arr[x1][i])
       }
       for(let i = x1; i < x2; i++) { // 우
           stack.push(arr[i][y2])
       }
       for(let i = y2; i > y1; i--) { // 하
           stack.push(arr[x2][i])
       }
       for(let i = x2; i > x1; i--) { // 좌
           stack.push(arr[i][y1])
       }
       
       result.push(Math.min(...stack))
       
       // stack 순서 바꾸기 (맨 뒤 -> 맨 앞)
       let temp = stack.pop()
       stack.unshift(temp)
       
       // 회전 후의 행렬 만들기 (값 바꿔주기) (stack에서 빼서 하나씩 채움)
       for(let i = y1; i < y2; i++) { // 상
           arr[x1][i] = stack.shift()
       }
       for(let i = x1; i < x2; i++) { // 우
           arr[i][y2] = stack.shift()
       }
       for(let i = y2; i > y1; i--) { // 하
           arr[x2][i] = stack.shift()
       }
       for(let i = x2; i > x1; i--) { // 좌
           arr[i][y1] = stack.shift()
       }
   }
    
   return result;
}

