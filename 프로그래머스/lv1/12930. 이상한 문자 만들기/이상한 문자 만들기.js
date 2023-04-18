function solution(s) {
     let upperArr = Array.from({length: 26}, (_, i) => String.fromCharCode(i + 65))
    let lowerrArr = upperArr.map((el) => el.toLowerCase())

    //ABCDEFGHIJKLMNOPQRSTUVWXYZ
    
    let result = ''
    let idx = 0;
    
    for (let i = 0; i < s.length; i++) {
        if(s[i] === ' ') {
            result += ' '
            idx = 0;
        } else if(idx % 2 === 0) { // 짝수
            result += s[i].toUpperCase();
            idx++
        } else if(idx % 2 !== 0) { // 홀수
            result += s[i].toLowerCase();
            idx++
        }
        
    } 
    return result;
    
}
