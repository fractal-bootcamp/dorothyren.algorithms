//iterate through an array
//compare each element to the next element 
//if the next element is larger than the current element, swap them 
// return the new array with the swapped elements
//check if the array still needs sorting
// check if the array is sorted, if not, keep sorting 

const bubbleSort = (array): number[] => {
    const inputArray = [...array];
    let didNumbersSwap = false;

    for (let i = 0; i < inputArray.length; i++) {
        const element1 = inputArray[i];
        const element2 = inputArray[i + 1];

        if (element1 < element2) {
            inputArray[i + 1] = element1
            inputArray[i] = element2

            didNumbersSwap = true
        }

    }
    if (didNumbersSwap) return (bubbleSort(inputArray));
    return inputArray
}