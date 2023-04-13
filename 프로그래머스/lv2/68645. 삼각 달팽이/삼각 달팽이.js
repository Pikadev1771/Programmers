function solution(n) {
    let result = []
    
    // 삼각형 배열
    // let arr = new Array(4).fill().map((_, idx) => new Array(idx+1).fill(0))
    let arr = []
    
    for(let i = 1; i <= n; i++) {
        arr.push(Array(i).fill(0))
    }
    
    
    // 좌표
    let y = -1
    let x = 0
    
    // 채울 숫자
    let number = 1
    
    // 숫자 채우기 [[0], [0, 0], [0, 0, 0], [0, 0, 0, 0]....]
    for(let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) { // 단지 횟수의 의미..
            if(i % 3 === 0) {
                y++ // 밑으로 (j~n번동안 i는 같음..)
            } else if(i % 3 === 1) {
                x++ // 오른쪽으로
            } else { // 위로
                y--;
                x--;
            }
            arr[y][x] = number
            number++  
        } 
          
        }
    
    for (let i = 0; i < n; i++) {
            result = result.concat(arr[i])
    } 
    return result;
    }
    