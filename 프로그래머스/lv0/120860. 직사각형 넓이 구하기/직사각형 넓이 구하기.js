function solution(dots) {
    let xs = dots.map((el) => el[0])
    let ys = dots.map((el) => el[1])
    let lengthX = Math.max(...xs) - Math.min(...xs)
    let lengthY = Math.max(...ys) - Math.min(...ys)
    
    return lengthX * lengthY
}