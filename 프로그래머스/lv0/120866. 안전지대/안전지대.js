function solution(board) {
  let answer = 0;

 const dangerArea = [
		[-1, 0], [1, 0], [0, 1], [0, -1], [-1, 1], [1, 1], [1, -1], [-1, -1]
	];
    
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[i].length; j++) {
            if(board[i][j] === 1) {
                dangerArea.map((v) => {
                    let [x, y] = v;
                    [x, y] = [x + i, y + j]; // 해당 위험지역 좌표 
                    if(x >= 0 && x < board.length && y >= 0 && y < board[i].length && board[x][y] === 0) 
                        board[x][y] = 2;
                    
                })
            }
        }
    }
    console.log(board)
    board.map(v1 => v1.map(v2 => {
        if(v2 === 0) answer++
    }))
    return answer;
}

