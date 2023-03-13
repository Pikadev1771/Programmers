// n과 6의 최소공배수
// 최소공배수 / 6 

function solution(n) {
    let answer = 1; 
    while ( (answer * 6) % n !== 0 ) {
        answer ++;
    }
    
    return answer;
}