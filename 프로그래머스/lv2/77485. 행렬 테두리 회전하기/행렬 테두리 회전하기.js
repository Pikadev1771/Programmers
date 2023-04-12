// function solution(rows, columns, queries) {
//    const result = []
   
//    // 행렬 만들기
//    let arr = Array.from(new Array(rows+1), () => new Array(columns+1).fill(0))
   
//    for(let i = 1; i <= rows; i++) {
//        for (let j = 1; j <= columns; j++) {
//            arr[i][j] = (i-1) * columns + j
//        }
//    }
    
//    for(let q = 0; q < queries.length; q++) {
//        const [x1, y1, x2, y2] = queries[q]
//        const stack = [] // 변하는 수 배열 (순서대로)
       
//        // 각 사각형 (마지막 제외) 돌면서 stack 배열 채우기
//        for(let i = y1; i < y2; i++) { // 상
//            stack.push(arr[x1][i])
//        }
//        for(let i = x1; i < x2; i++) { // 우
//            stack.push(arr[i][y2])
//        }
//        for(let i = y2; i > y1; i--) { // 하
//            stack.push(arr[x2][i])
//        }
//        for(let i = x2; i > x1; i--) { // 좌
//            stack.push(arr[i][y2])
//        }
       
//        result.push(Math.min(...stack))
       
//        // stack 순서 바꾸기 (맨 뒤 -> 맨 앞)
//        let temp = stack.pop()
//        stack.unshift(temp)
       
//        // 회전 후의 행렬 만들기 (값 바꿔주기) (stack에서 빼서 하나씩 채움)
//        for(let i = y1; i < y2; i++) { // 상
//            arr[x1][i] = stack.shift()
//        }
//        for(let i = x1; i < x2; i++) { // 우
//            arr[i][y2] = stack.shift()
//        }
//        for(let i = y2; i > y1; i--) { // 하
//            arr[x2][i] = stack.shift()
//        }
//        for(let i = x2; i > x1; i--) { // 좌
//            arr[i][y1] = stack.shift()
//        }
//    }
    
//    return result;
// }

function solution(rows, columns, queries) {
  const answer = [];
  let arr = Array.from(new Array(rows + 1), () =>
    new Array(columns + 1).fill(0)
  );

  // 숫자 채우기
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= columns; j++) {
      arr[i][j] = (i - 1) * columns + j;
    }
  }

  for (let tc = 0; tc < queries.length; tc++) {
    const [x1, y1, x2, y2] = queries[tc];
    const stack = [];
    // 맨 위 직사각형 고르기 x1은 행 고정, y1이 y2 직전까지 1씩 증가
    for (let i = y1; i < y2; i++) stack.push(arr[x1][i]);
    // 오른쪽 직사각형 고르기 y2는 고정, x1이 x2 직전까지 1씩 증가
    for (let i = x1; i < x2; i++) stack.push(arr[i][y2]);
    // 아래쪽 직사각형 고르기 x2는 고정, y2가 y1 직전까지 1씩 감소
    for (let i = y2; i > y1; i--) stack.push(arr[x2][i]);
    // 왼쪽 직사각형 고르기y1는 고정, x2가 x1 직전까지 1씩 감소
    for (let i = x2; i > x1; i--) stack.push(arr[i][y1]);

    // 정답 찾기
    answer.push(Math.min(...stack));
    const temp = stack.pop();
    stack.unshift(temp);

    for (let i = y1; i < y2; i++) arr[x1][i] = stack.shift();
    for (let i = x1; i < x2; i++) arr[i][y2] = stack.shift();
    for (let i = y2; i > y1; i--) arr[x2][i] = stack.shift();
    for (let i = x2; i > x1; i--) arr[i][y1] = stack.shift();
  }

  return answer;
}