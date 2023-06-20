function solution(my_string) {
    let answer = ''
  for(let str of my_string) {
      if(str === str.toUpperCase()) { // 대문자라면
          answer+= str.toLowerCase()
      } else {
          answer+= str.toUpperCase()
      }
  }
    
    return answer
}