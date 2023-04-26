function collatz (input, count) {
    if(count > 500)  return -1; 
    if(input === 1)  return count; 
    
    if(input % 2 === 0) {
        return collatz(input / 2, count+1) 
    } else {
        return collatz(input * 3 + 1, count+1)
      }
    }


function solution(num) {
    
    return collatz(num, 0)
   
}