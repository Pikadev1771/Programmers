function solution(my_string, num1, num2) {
    // let arr = my_string.split('')
    // arr[num1] = arr[num2]
    // arr[num2] = arr[num1]
    // return arr.join('');
    
     let arr = my_string.split('')
    arr.splice(num1, 1, my_string[num2])
    arr.splice(num2, 1, my_string[num1])
               
    return arr.join('');
}