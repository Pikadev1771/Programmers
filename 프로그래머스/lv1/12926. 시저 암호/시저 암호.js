function solution(s, n) {
    let upperArr = Array.from({length: 26}, (_, i) => String.fromCharCode(i + 65))
    let lowerrArr = upperArr.map((el) => el.toLowerCase())
    
    //ABCDEFGHIJKLMNOPQRSTUVWXYZ
    
    let result = ''
    for(let i = 0; i < s.length; i++) {
        // z 또는 Z
        if(upperArr.indexOf(s[i]) + n > 25) { // Z
            result += upperArr[upperArr.indexOf(s[i]) + n - 26] 
        } else if(lowerrArr.indexOf(s[i]) + n > 25) { // z
            result += lowerrArr[lowerrArr.indexOf(s[i]) + n - 26] 
        } else if (upperArr.indexOf(s[i]) !== -1) { // 대문자
            result += upperArr[upperArr.indexOf(s[i])+n]
        } else if (lowerrArr.indexOf(s[i]) !== -1) { //  소문자
            result += lowerrArr[lowerrArr.indexOf(s[i])+n]
        } else if (s[i] === ' ') {
            result += ' '
        }
    } return result
}