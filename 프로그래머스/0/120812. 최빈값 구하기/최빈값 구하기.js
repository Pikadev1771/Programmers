function solution(array) {
    const countMap = new Map()
    array.forEach((num) => {
        countMap.set(num, (countMap.get(num) || 0) + 1)
    })
    

    let maxFrequency = 0;
    let mode = null;
    
    countMap.forEach((frequency, num) => {
        if(frequency > maxFrequency) {
            maxFrequency = frequency
            mode = num
        }
    })
   
    let modeCount = 0

    countMap.forEach((frequency, num) => {
        if(frequency === maxFrequency) {
            modeCount++
        }
    })
    
    return modeCount === 1 ? mode : -1
    
}