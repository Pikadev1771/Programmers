function arrSum(arr){
	if(arr.length === 0){
    	return 0;
    }
    const head = arr[0];
    const tail = arr.slice(1);
    return head + arrSum(tail);
    }

function solution(n) {
    let temp = n.toString().split('')
    let arr = temp.map((el) => Number(el))
    
    return arrSum(arr)
    
}