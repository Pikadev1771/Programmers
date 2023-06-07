function solution(slice, n) {
   let pizza = 1;
    
    while (n > slice * pizza) {
        pizza++
    }
    
    return pizza;
}