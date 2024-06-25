'use client';

import selectionSort2 from "@/algorithms/selectionSort2";
import { useEffect, useState } from "react";
import { start } from "repl";

//create starting array to visualize 
const startingArray = [5, 13, 9, 4, 12, 7, 1, 6, 8, 10, 2, 11, 3];
const history = [structuredClone(startingArray)]
const sortedHistory = selectionSort2({ array: startingArray, history: history })

export function SelectionSort() {
    const [steptoShow, setStepToShow] = useState(history[0])
    console.log(history)

    //write a useEffect to display the new array every time a change happens
    useEffect(
        () => {
            history.forEach((element, index, array) => setTimeout(() => setStepToShow(history[index]), 200 * index))
        }
        , [])


    return (
        <>
            <div>
                <label>Selection Sort</label>
            </div>
            {/* display starting array */}
            <label>Initial Array</label>
            <div className="flex p-4">
                {startingArray.map((item, idx) => (
                    <div key={idx}>
                        <div className="mx-px p-3" style={{ height: `${item * 10}px`, width: '10px', background: 'purple' }} />
                    </div>
                )
                )}
            </div>
            {/* display the history of changed arrays that lead to the final sorted array */}
            <div className="flex">
                <label>Sorted Array</label>
                <div className="flex p-4">
                    {steptoShow.map((item, idx) => (
                        <div key={idx}>
                            <div className="mx-px p-3" style={{ height: `${item * 10}px`, width: '10px', background: 'orange' }} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}