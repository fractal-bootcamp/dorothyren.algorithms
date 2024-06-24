// // Bubble sort:
// // 1. Iterate through an array
// // 2. Compare each element to the next element
// // 3. If the current element is greater than the next element, swap them
// // 4. when we're done with the first iteration, the largest element will be at the end of the array
// // 5. we check if the array is sorted, if not, we repeat the process

// export const bubbleSort = (arr: number[]): number[] => {

//     const newArray = [...arr];
//     let atLeastOneSwap = false;

//     for (let i = 0; i < newArray.length; i++) {
//         const element1 = newArray[i];
//         const element2 = newArray[i + 1];
//         if (element1 > element2) {
//             newArray[i] = element2;
//             newArray[i + 1] = element1;
//             atLeastOneSwap = true;
//         }
//     }

//     if (atLeastOneSwap) return bubbleSort(newArray);
//     return newArray;
// }


// export const bubbleSortStep = (arr: number[]): { arr: number[], swapped: boolean } => {

//     const newArray = [...arr];
//     let atLeastOneSwap = false;

//     for (let i = 0; i < newArray.length; i++) {
//         const element1 = newArray[i];
//         const element2 = newArray[i + 1];
//         if (element1 > element2) {
//             newArray[i] = element2;
//             newArray[i + 1] = element1;
//             atLeastOneSwap = true;
//         }
//     }

//     return { arr: newArray, swapped: atLeastOneSwap };
// }

// // const bubbleSortFromStep = (arr: number[]): number[] => {
// //   const { arr: newArr, swapped } = bubbleSortStep(arr);
// //   if (swapped) return bubbleSortFromStep(newArr);
// //   return newArr;
// // }