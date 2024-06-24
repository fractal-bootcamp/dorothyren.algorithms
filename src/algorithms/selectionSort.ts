// Selection sort finds the lowest value in an array and moves it to the front of the array 
// loop through and find the lowest value
// find the lowest element and set it as the lowest number
// move the lower number to the front of the array
// check if the array is sorted, if not, repeat

const selectionSort = (array: number[]) => {
    const newArray = [...array];

    //loop through array as many times as there are elements
    for (let iterationCount = 0; iterationCount < newArray.length - 1; iterationCount++) {
        // when we loop through the array, we want to have an offset equal to i
        const offset = iterationCount;
        let positionOfLowestValue = offset; // position of the lowest value

        // loop through the array
        for (let idx = offset; idx < newArray.length; idx++) {
            const currentLowestValue = newArray[positionOfLowestValue];
            const currentValue = newArray[idx]

            if (currentValue < currentLowestValue) {
                //identifies where the lowest value is
                positionOfLowestValue = idx;
            }
        }

        // we're done going through the array, we need to do something with the lowest value
        // let's grab the lowest value, swap it with the value at the offset



    }


}

// [2, 4, 5, 3, 1]
// [1, 2, 4, 5, 3]
// [1, 2, 4, 5, 3]
// [1, 2, 3, 4, 5]
// [1, 2, 3, 4, 5]

// how many times we've gone through it
// offset index from the beginning