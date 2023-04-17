function solution(arr1, arr2) {
    let result = [];
    
    // arr1의 행 개수 = arr2의 열 개수
    
    for (let i = 0; i < arr1.length; i++) { // arr1의 행 개수
        const row = [];
        for ( let j = 0; j < arr2[0].length; j++) { // arr2의 열 개수
            let sum = 0;
            for (let k = 0; k < arr2.length; k++) {// arr2의 행 개수 (= arr1[0].length)
                sum += arr1[i][k] * arr2[k][j]
            }
             row.push(sum)
        }   result.push(row)
    }
    return result
    
}