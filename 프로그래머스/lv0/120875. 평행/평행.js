// function combinationLoop(lookup) {
//   let result = [];

//   console.log(lookup);

//   for (let i = 0; i < lookup.length; i++) {
//     for (let j = i + 1; j < lookup.length; j++) {
     
//         result.push([lookup[i], lookup[j]]);
     
//     }
//   }

//   return result;
// }

function solution(dots) {
    // (x2 - x1) / (y2 - y1)
    
//   const leanArr = [];
    
//     for(let i = 0; i < dots.length; i++) {
//         for(let j = i+1; j < dots.length; j++) {
//             const lean = (dots[i][1]-dots[j][1]) / (dots[i][0]-dots[j][0])
            
//             if(leanArr.indexOf(lean) !== -1) return 1
//             leanArr.push(lean)
//         }
//     }
//     return 0;
    
    let answer = 0;
    
    // 0, 1 / 2, 3
    let a = (dots[0][1]-dots[1][1]) / (dots[0][0]-dots[1][0])
    let b = (dots[2][1]-dots[3][1]) / (dots[2][0]-dots[3][0])
    
    if(a === b) answer = 1
    
    let c = (dots[0][1] - dots[2][1]) / (dots[0][0] - dots[2][0]);
    let d = (dots[1][1] - dots[3][1]) / (dots[1][0] - dots[3][0]);
    
    if (c === d) answer = 1;
    
    let e = (dots[0][1] - dots[3][1]) / (dots[0][0] - dots[3][0]);
    let f = (dots[1][1] - dots[2][1]) / (dots[1][0] - dots[2][0]);
    
    if (e === f) answer = 1;

    
    return answer;
}