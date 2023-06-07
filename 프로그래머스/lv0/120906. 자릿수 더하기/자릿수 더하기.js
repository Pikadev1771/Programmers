function solution(n) {
  arr = [...n.toString()].map(x => Number(x))
    
return arr.reduce((acc, cur) => acc + cur)
}