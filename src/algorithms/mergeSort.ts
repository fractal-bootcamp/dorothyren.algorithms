//1) Divide: Divide the list or array recursively into two halves until it can no more be divided.
//a single item array is sorted 


// 2) Conquer: Each subarray is sorted individually using the merge sort algorithm.
//

// 3) Merge: The sorted subarrays are merged back together in sorted order. 
//The process continues until all elements from both subarrays have been merged.

// need 2 functions: merge and mergeSort
//mergeSort - if I split this unsorted array into two arrays. now I have 2 unsorted arrays. I can pass each of those unsorted arrays to a function 
//that will sort an array. once I have two sorted arrays I use the merge function to merge the two sorted arrays
//mergeSort will split the array into 2 halves and pipe that unsorted array into two sorting functions 
//merge two sorted arrays into 1 sorted array 

//merge function  - input is 2 sorted arrays, output is one sorted array

const merge = (left: number[], right: number[]): number[] => {
    const newLeft = structuredClone(left)
    const newRight = structuredClone(right)
    const sorted: number[] = []

    while (newLeft.length && newRight.length) {
        if (newLeft[0] < newRight[0]) {
            sorted.push(newLeft.shift())
        } else {
            sorted.push(newRight.shift())
        }
    }
    return (...sorted, ...newLeft, ...newRight)
}

// graph: a node that references one or more nodes
// tree: parent node --> children nodes 
//React components are built in a tree 

//node: {sortedArray: number[], unsortedArray: number[], leftChild?: node, rightChild?: node }

// type Node = {
//     sortedArray: number[], //before 
//     unsortedArray: number[], // after
//     leftChild?: Node,
//     rightChild?: Node
// }

// type wrappedMergeSort = {

// }
//by wrapping it, we can observe what's happening. take snapshots of intermediate states and see what's useful for visualization 
const wrappedMergeSort = (array: number[]) => {
    let mergeCount = 0;
    const mergeSort = (arr: number[]): number[] => {
        let thisNode = {
            sortedArray: [],
            unsortedArray: arr,
        }
        console.log('mergeSort stack', arr)
        if (arr.length == 1) {
            return arr;
        }

        //split it into two items and feed those to merge 
        const middle = Math.floor(arr.length / 2) //this is to make sure that we dont have a weird index. can use math.floor or math.ceil
        const left = arr.slice(0, middle)
        const right = arr.slice(middle, arr.length)

        const sortedLeft = mergeSort(left)
        const sortedRight = mergeSort(right)


        mergeCount = mergeCount + 1
        // return { sortedArray: merge(sortedLeft, sortedRight) }
    }
    const sortedArray = mergeSort(array)

    return {
        sortedArray, metadata: {
            mergeCount
        }
    }

}
console.log(wrappedMergeSort([1, 4, 2, 3]))

