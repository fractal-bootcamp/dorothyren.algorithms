function mergeSort(array: number[]): number[] {

    //split the array in half 
    const middleIndex = Math.floor(array.length / 2)
    const leftArray = array.slice(0, middleIndex);
    const rightArray = array.slice(middleIndex, array.length)

    //sort the two halves and handle the case where there is only one element so it is already sorted
    const sortedLeft = leftArray.length > 1 ? mergeSort(leftArray) : leftArray
    const sortedRight = rightArray.length > 1 ? mergeSort(rightArray) : rightArray

    // 3. Merge the right array into the left and return the result
    let leftIndex = 0
    let rightIndex = 0
    while (rightIndex <= sortedRight.length - 1) {
        if (sortedRight[rightIndex] < sortedLeft[leftIndex]) {
            sortedLeft.splice(leftIndex, 0, sortedRight[rightIndex])
            rightIndex = rightIndex + 1
        }
        leftIndex = leftIndex + 1

        // if we increment past the end of the left array
        if (leftIndex >= sortedLeft.length - 1) {
            const theRestOfRight = sortedRight.slice(rightIndex)
            sortedLeft.push(...theRestOfRight)
            rightIndex = sortedRight.length
        }
    }

    return sortedLeft
}

const sortedArray = mergeSort([1, 2, 6, 7, 2, 3, 2, 23, 72, 1, 9, 5])
console.log(sortedArray)