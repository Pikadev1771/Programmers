function solution(numer1, denom1, numer2, denom2) {
   const a = numer1 * denom2 + numer2 * denom1
   const b = denom1 * denom2
    let max = 1; // 최대공약수
    
    // a와 b의 최대공약수를 구해서 각각 나눠준다
    
    // 최대공약수 max 구하기
    for(let i = 1; i <= a; i++) {
        if(a%i === 0 && b%i === 0) {
            max = i
        }
    }
    
    
    return [a/max, b/max]
}