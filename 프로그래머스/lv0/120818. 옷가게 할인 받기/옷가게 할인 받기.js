function solution(price) {
    return price < 100000 ? price : price < 300000 ? ~~(0.95 * price) : price < 500000 ? ~~(0.9 * price) : ~~(0.8 * price) 
}