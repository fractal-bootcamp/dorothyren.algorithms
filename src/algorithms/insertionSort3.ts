
function insertSort3(array: number[], sortedArray?: number[], callback?: (arr: number[]) => any): number[] {
    if (!sortedArray) sortedArray = []
    if (array.length == 0) return sortedArray
    const newArray = structuredClone(array)
    const elementToBeSorted = newArray[0]

    for (let index = 0; index < sortedArray.length; index++) {
        if (elementToBeSorted < sortedArray[index]) {
            sortedArray.splice(index, 0, elementToBeSorted)
            return insertSort3(newArray.slice(1), sortedArray)
        }
    }
    sortedArray?.push(elementToBeSorted)
    if (callback) callback(sortedArray)
    return insertSort3(newArray.slice(1), sortedArray, callback)
}

console.log(insertSort3([5, 7, 8, 10, 2, 6]))