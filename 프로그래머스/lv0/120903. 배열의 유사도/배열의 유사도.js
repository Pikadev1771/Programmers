function solution(s1, s2) {
    let nums = []
        for(let i = 0; i < s1.length; i++) {
        if(s2.indexOf(s1[i]) !== -1) {
           nums.push(s1[i])
           }
        } return nums.length
    }