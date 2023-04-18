// function solution(s, n) {
//     let upperArr = Array.from({length: 26}, (_, i) => String.fromCharCode(i + 65))
//     let lowerArr = upperArr.map((el) => el.toLowerCase())
    
//     //ABCDEFGHIJKLMNOPQRSTUVWXYZ
    
//     let result = ''
//     for(let i = 0; i < s.length; i++) {
//         if(upperArr.indexOf(s[i]) + n > 25) { // Z
//             result += upperArr[upperArr.indexOf(s[i]) + n - 26] 
//         } else if(lowerArr.indexOf(s[i]) + n > 25) { // z
//             result += lowerArr[lowerArr.indexOf(s[i]) + n - 26] 
//         } else if (upperArr.indexOf(s[i]) !== -1) { // 대문자
//             result += upperArr[upperArr.indexOf(s[i])+n]
//         } else if (lowerArr.indexOf(s[i]) !== -1) { //  소문자
//             result += lowerArr[lowerArr.indexOf(s[i])+n]
//         } else if (s[i] === ' ') {
//             result += ' '
//         }
//     } return result
// }

function solution(s, n) {
    let upperArr = Array.from({length: 26}, (_, i) => String.fromCharCode(i + 65))
    let lowerArr = upperArr.map((el) => el.toLowerCase())
    let answer = ''
    
    for (let i = 0; i < s.length; i++) {
        let text = s[i]      
        if(text === ' ') {
            answer += ' '
            continue;
        } 
        
        let textArr = upperArr.includes(text) ? upperArr : lowerArr
        let idx = textArr.indexOf(s[i])+n
        
        if(idx > 25) {
            idx = idx - 25 - 1
        }
        
        answer += textArr[idx]
        
    }
     return answer;
}

// function solution(s, n) {
//  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     var lower = "abcdefghijklmnopqrstuvwxyz";
//     var answer= '';

//     for(var i =0; i <s.length; i++){
//         var text = s[i];
//         if(text == ' ') {
//             answer += ' '; 
//             continue;
//         }
//         var textArr = upper.includes(text) ? upper : lower;
//         var index = textArr.indexOf(text)+n;
//         if(index >= textArr.length) index -= textArr.length;
//         answer += textArr[index];
//     }
//     return answer;
// }