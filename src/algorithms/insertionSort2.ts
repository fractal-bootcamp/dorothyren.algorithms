//we are passing in an array, sorting it, and returning a sorted copy of the array
function insertionSort2(array: number[], lockedinarray?: number[], callback?: (sortedArray: number[], remainingArray: number[]) => any): number[] {
    if (!lockedinarray) lockedinarray = [] // [1, 10, 5, 2]
    if (array.length == 0) return lockedinarray
    const newArray = structuredClone(array)
    const valueToBeSorted = newArray[0] //23

    let index = 0;
    while (valueToBeSorted > lockedinarray[index] && index < lockedinarray.length) {
        index = index + 1;
    }
    // if it isn't less than any elements, it must be greater than all elements
    lockedinarray.splice(index, 0, valueToBeSorted)
    if (callback) callback(structuredClone(lockedinarray), structuredClone(array))
    return insertionSort2(newArray.slice(1), lockedinarray, callback)

}

export default insertionSort2

console.log(insertionSort2([5, 8, 10, 2, 8, 17]))