function solution(keyinput, board) {
    let maxX = Math.floor(board[0] / 2)
    let minX = maxX * -1
    
    let maxY = Math.floor(board[1] / 2)
    let minY = maxY * -1
    
    let result = [0, 0]
    
    for(let i = 0; i < keyinput.length; i++) {
        if(keyinput[i] === "left" && result[0] > minX) {
            result[0]--
        } else if(keyinput[i] === "right" && result[0] < maxX) {
            result[0]++
        } else if(keyinput[i] === "down" && result[1] > minY) {
            result[1]--
        } else if(keyinput[i] === "up" && result[1] < maxY) {
            result[1]++
        } 
    }
    return result
}