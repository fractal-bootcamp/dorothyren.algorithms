//find the lowest remaining value in the array 
// lock it in at the front 
// repeat for the remaining values in the array 
// stop when every value is locked in 
type SortReturn = {
    sortedArray: number[],
    history: number[][]
}

type SelectionSortProps = {
    array: number[],
    countLockedIn?: number,
    history?: number[][]
}
type SelectionSort3Props = {
    array: number[],
    countLockedIn?: number,
    callback?: (arr: number[]) => any
}

const selectionSort2 = ({ array, history, countLockedIn }: SelectionSortProps): SortReturn => {
    //start by assuming the first remaining value in the array is the lowest
    if (!countLockedIn) countLockedIn = 0
    // 1. stop when all elements are locked in
    //this establishes the base state
    if (countLockedIn >= array.length - 1) return { sortedArray: array, history: history! }
    const newArray = structuredClone(array)
    if (!history) history = [structuredClone(newArray)]

    // 2. find the lowest remaining element
    //the lowest remaining index is assumed to be at index = countLockedIn
    let lowestRemainingIndex = countLockedIn
    for (let i = countLockedIn + 1; i < newArray.length; i++) { // FOR EACH ELEMENT in the rest of the array
        const elementToBeCompared = newArray[i]
        //this is accessing the value that is at the position lowestRemainingIndex
        //then 
        if (elementToBeCompared < newArray[lowestRemainingIndex]) {
            lowestRemainingIndex = i // the index of elementToBeCompared
        }
    }
    // what is lowest remaining index? IS THE ACTUAL LOWEST REMAINING NUMBER

    // 3. swap
    [newArray[countLockedIn], newArray[lowestRemainingIndex]] = [newArray[lowestRemainingIndex], newArray[countLockedIn]];
    //every time a swap happens, capture it and add it to the existing history of arrays
    history.push(structuredClone(newArray))

    return selectionSort2({ array: newArray, countLockedIn: countLockedIn + 1, history: history })
}


export const selectionSort3 = (array: number[], countLockedIn?: number, callback?: (arr: number[]) => any): number[] => {
    //start by assuming the first remaining value in the array is the lowest
    if (!countLockedIn) countLockedIn = 0
    // 1. stop when all elements are locked in
    //this establishes the base state
    if (countLockedIn >= array.length - 1) return array
    const newArray = structuredClone(array)

    // 2. find the lowest remaining element
    //the lowest remaining index is assumed to be at index = countLockedIn
    let lowestRemainingIndex = countLockedIn
    for (let i = countLockedIn + 1; i < newArray.length; i++) { // FOR EACH ELEMENT in the rest of the array
        const elementToBeCompared = newArray[i]
        //this is accessing the value that is at the position lowestRemainingIndex
        //then 
        if (elementToBeCompared < newArray[lowestRemainingIndex]) {
            lowestRemainingIndex = i // the index of elementToBeCompared
        }
    }
    // what is lowest remaining index? IS THE ACTUAL LOWEST REMAINING NUMBER

    // 3. swap
    [newArray[countLockedIn], newArray[lowestRemainingIndex]] = [newArray[lowestRemainingIndex], newArray[countLockedIn]];
    //every time a swap happens, call an arbitrary callback function which can do anything
    if (callback) callback(structuredClone(newArray))

    return selectionSort3(newArray, countLockedIn + 1, callback)
}

export default selectionSort2

console.log(selectionSort2({ array: [9, 4, 2, 6, 1, 8, 3, 7, 5] }))