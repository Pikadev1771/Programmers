function solution(quiz) {
    
    
    let result = quiz.map((el)=> {
        let arr = el.split(' ') // [ "3", "-","4", "=", "-3"]
        if(el.indexOf("+") !== -1) {
            return Number(arr[0])+Number(arr[2]) === Number(arr[4]) ? "O" : "X"
            
        } else {
            return Number(arr[0])-Number(arr[2]) === Number(arr[4]) ? "O" : "X"
        }

    })
    return result
    
}