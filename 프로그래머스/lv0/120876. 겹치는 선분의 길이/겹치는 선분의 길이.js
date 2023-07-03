function solution(lines) {
  let arr = new Array(200).fill(0)
  
  for(let i = 0; i < 3; i++) { // 선분 하나씩 순회
      let start = lines[i][0]
      let end = lines[i][1]
      
      for(let j = start; j < end; j++) {
          arr[j+100]++;
      }
  }
    console.log(arr)
    return arr.filter(el => el > 1).length;
    
}