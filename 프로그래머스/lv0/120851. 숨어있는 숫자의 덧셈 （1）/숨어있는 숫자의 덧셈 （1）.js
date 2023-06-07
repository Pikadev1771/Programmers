function solution(my_string) {
   let nums = [...my_string].filter(x => parseInt(x))
   
   return nums.reduce((acc, cur) => acc + parseInt(cur), 0)
}