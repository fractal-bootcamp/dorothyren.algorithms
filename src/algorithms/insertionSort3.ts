
function insertSort3(array: number[], sortedArray?: number[]): number[] {
    if (!sortedArray) sortedArray = []
    const newArray = structuredClone(array)
    if (newArray.length == 0) return sortedArray
    const elementToBeSorted = newArray[0]

    for (let index = 0; index < sortedArray.length; index++) {
        if (elementToBeSorted < sortedArray[index]) {
            sortedArray.splice(index, 0, elementToBeSorted)
            return insertSort3(newArray.slice(1), sortedArray)
        }
    }
    sortedArray?.push(elementToBeSorted)
    return insertSort3(newArray.slice(1), sortedArray)
}

console.log(insertSort3([5, 7, 8, 10, 2, 6]))