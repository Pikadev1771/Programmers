function solution(num_list) {
//     var answer = [];
//     let even = 0;
//     let odd = 0;
    
//     num_list.forEach((el) => {
//         if(el%2 === 0 ) {
//            even++;
//            } else {
//                odd++
//            }
//     })
    
    
    var answer = [0, 0] 
    num_list.forEach((el) => {
        answer[el%2] += 1
    })
    
    return answer;
}

