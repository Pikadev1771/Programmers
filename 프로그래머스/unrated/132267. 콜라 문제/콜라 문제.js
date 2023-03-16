function solution(a, b, n) {
    // a병 가져가면 b병 줌. 
    // n은 가지고 있는 병의 수
    var answer = 0; // 추가로 받은 콜라병 수
    
    
    while(n >= a) {
        let c = parseInt(n/a)*a // 가져다 준 병의 수 
        let d = parseInt(n/a)*b // 받는 병의 수
        n = n - c + d
        answer += d
    }
    
    return answer;
}