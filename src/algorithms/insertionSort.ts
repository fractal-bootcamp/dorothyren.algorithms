//we are passing in an array, sorting it, and returning a sorted copy of the array
function insertionSort(array: number[], lockedinarray?: number[]): number[] {
    if (!lockedinarray) lockedinarray = []
    if (array.length == 0) return lockedinarray
    const newArray = structuredClone(array)
    const firstElement = newArray[0]

    for (let index = 0; index < lockedinarray.length; index++) {
        if (firstElement < lockedinarray[index]) {
            lockedinarray.splice(index, 0, firstElement)
            return insertionSort(newArray.slice(1), lockedinarray)
        }
    }
    // if it isn't less than any elements, it must be greater than all elements
    lockedinarray.push(firstElement)
    return insertionSort(newArray.slice(1), lockedinarray)

}
