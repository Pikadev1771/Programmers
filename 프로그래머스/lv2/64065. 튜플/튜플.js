function solution(s) {
  let result = [];
    
    let splitArr = s.replace('{{','').replace('}}','').split('},{');
   
    
    let arr = []
    for(let i = 0; i < splitArr.length; i++) {
        arr.push(splitArr[i].split(','))
    }
 

    // 길이 순 정렬
    arr.sort((a, b) => {
        if(a.length > b.length) return 1;
        if(a.length < b.length) return -1;
    })
    

    for(let i = 0; i < arr.length; i++) {
        arr[i].forEach((el) => {
            if(result.indexOf(Number(el)) === -1) {
                result.push(Number(el))
            }
        })
    }

    return result;
}