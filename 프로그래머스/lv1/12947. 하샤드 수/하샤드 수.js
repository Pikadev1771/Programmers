// function arrSum(arr) {
//     if(arr.length === 0) {
//         return 0
//     }
//     const head = arr[0]
//     const tail = arr.slice(1)
//     return head + arrSum(tail)
// }

function solution(x) {
let sum = x.toString().split('').map(el => Number(el)).reduce((acc, cur) => acc + cur)

return (x % sum) ? false : true

}