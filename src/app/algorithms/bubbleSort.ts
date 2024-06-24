// iterate through an array
// compare each element to the next element
// if the current element is greater than the next element, swap them
// when we're done the first iteration, the largest item will be at the end of the array 
// check if the array is sorted, if not, repeat

export const bubbleSort = (array: number[]): number[] => {
    const newArray = [...array]; // newArray = [4, 5, 7,1 2]
    let wasArrayResorted = false;

    // greatest element is at the end of the array after this for loop
    for (let i = 0; i < newArray.length; i++) { // 5 times
        const number1 = newArray[i]; // 7
        const number2 = newArray[i + 1]; // 2
        if (number1 > number2) {
            //swap them and set the newArray 
            newArray[i] = number2;
            newArray[i + 1] = number1;
            wasArrayResorted = true;
        }
    }

    if (wasArrayResorted) return bubbleSort(newArray);
    return newArray // [1, 4, 5, 7, 2]
}

type ArrayState = number[]
type HistoryOfStates = ArrayState[]

export const bubbleSortWithHistory = (array: number[], history?: HistoryOfStates): HistoryOfStates => {
    const newHistory = history ? [...history] : []
    const newArray = [...array]; // newArray = [4, 5, 7,1 2]
    let wasArrayResorted = false;

    // greatest element is at the end of the array after this for loop
    for (let i = 0; i < newArray.length; i++) { // 5 times
        const number1 = newArray[i]; // 7
        const number2 = newArray[i + 1]; // 2
        if (number1 > number2) {
            //swap them and set the newArray 
            newArray[i] = number2;
            newArray[i + 1] = number1;
            newHistory.push([...newArray])
            wasArrayResorted = true;
        }
    }

    if (wasArrayResorted) return bubbleSortWithHistory(newArray, newHistory);
    return newHistory // [1, 4, 5, 7, 2]
}

// console.log(bubbleSortWithHistory([7, 1, 9, 4, 2]))

//keep a history of the intermediate steps

export const bubbleSortWithCallback = (array: number[], callback?: (arr: number[]) => void): number[] => {
    const newArray = [...array]; // newArray = [4, 5, 7,1 2]
    let wasArrayResorted = false;

    // greatest element is at the end of the array after this for loop
    for (let i = 0; i < newArray.length; i++) { // 5 times
        const number1 = newArray[i]; // 7
        const number2 = newArray[i + 1]; // 2
        if (number1 > number2) {
            //swap them and set the newArray 
            newArray[i] = number2;
            newArray[i + 1] = number1;
            wasArrayResorted = true;
            // console.log(newArray)
            if (callback) callback(newArray)
        }
    }

    if (wasArrayResorted) return bubbleSortWithCallback(newArray);
    return newArray // [1, 4, 5, 7, 2]
}



// bubbleSortWithCallback(myArr, (newArr) => { setArray(newArr) })

// bubbleSortWithCallback([1, 4, 5, 1, 2, 9, 1, 2, 8, 1, 1], (arr) => { const newArr = arr.map((i: number) => i * 2); console.log(arr, "times 2:", newArr) })