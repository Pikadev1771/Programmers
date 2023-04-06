function solution(num, k) {
    let arr = num.toString().split('')
    let kstr = k.toString()
  for (let i = 0; i < arr.length; i++) {
      
      if(arr[i] === kstr) {
          return i+1
      } 
  } return -1
    

}