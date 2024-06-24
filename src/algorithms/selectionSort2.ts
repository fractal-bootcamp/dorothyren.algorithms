
const selectionSort2 = (array: number[], countLockedIn?: number): number[] => {

    if (!countLockedIn) countLockedIn = 0
    // 1. stop when all elements are locked in
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

    return selectionSort2(newArray, countLockedIn + 1)
}

console.log(selectionSort2([1, 4, 2, 6, 1, 8, 3]))