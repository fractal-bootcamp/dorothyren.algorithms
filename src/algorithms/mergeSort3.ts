
function mergeSort3(array: number[], callback?: (snapshot: { left: number[], right: number[], merged?: number[], original?: number[] }) => any): number[] {
    //split the array in half \
    const middle = Math.floor(array.length / 2)
    const leftArray2 = array.slice(0, middle)
    const rightArray2 = array.slice(middle, array.length)
    if (callback) callback({ left: leftArray2, right: rightArray2, original: array })

    // sort the two halves using mergeSort - handle the case where there is only one element in the array
    const sortedLeftArray2 = leftArray2.length > 1 ? mergeSort3(leftArray2, callback) : [...leftArray2]
    const combinedArray = [...sortedLeftArray2]
    const sortedRightArray2 = rightArray2.length > 1 ? mergeSort3(rightArray2, callback) : [...rightArray2]

    //merge the right array into the left in sorted order
    let leftIndex = 0
    let rightIndex = 0

    while (rightIndex <= sortedRightArray2.length - 1) {
        if (sortedRightArray2[rightIndex] < combinedArray[leftIndex]) {
            combinedArray.splice(leftIndex, 0, sortedRightArray2[rightIndex])
            rightIndex++
        }
        leftIndex++

        // if we increment past the left index, take the sorted right array and add it to the end of the sorted left array
        if (leftIndex > combinedArray.length - 1) {
            combinedArray.push(...sortedRightArray2.slice(rightIndex))
            //ends the while loop
            rightIndex = sortedRightArray2.length
        }
    }

    if (callback) callback({ left: sortedLeftArray2, right: sortedRightArray2, merged: combinedArray })
    return combinedArray
}


const unsortedArray2 = [5, 9, 4, 6, 15, 1, 4, 2, 0, 9]
const sorted = mergeSort3(unsortedArray2, console.log)
console.log(sorted)