function arrSum(arr) {
    if(arr.length === 0) {
        return 0
    }
    const head = arr[0]
    const tail = arr.slice(1)
    return head + arrSum(tail)
}

function solution(x) {
let arr = x.toString().split('').map(el => Number(el))

let sum = arrSum(arr)

if(x % sum === 0) {
    return true
} else {
    return false
}

}