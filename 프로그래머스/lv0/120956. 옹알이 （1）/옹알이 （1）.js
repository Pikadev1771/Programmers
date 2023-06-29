function solution(babbling) {
    debugger;
    let count = 0;
     const arr = ['aya', 'ye', 'woo', 'ma'] 
     
     for(let i = 0; i < babbling.length; i++) { // 주어진 단어 순회  
         for(let j = 0; j < arr.length; j++) { // 가능한 발음 순회
             if(babbling[i].indexOf(arr[j]) !== -1) {
                 babbling[i] = babbling[i].replace(arr[j], '_')
             }
         }
     }
    
    console.log(babbling)
    return babbling.map(el => el.replaceAll('_','')).filter(el => !el.length).length
    
}