'use client';

import insertionSort2 from "@/algorithms/insertionSort2";
import { useEffect, useState } from "react";
import { start } from "repl";

type snapshot = {
    sortedArray: number[],
    remainingArray: number[]
}

type History = snapshot[]

//create starting array
const startingArray = [5, 13, 9, 4, 12, 7, 1, 6, 8, 10, 2, 11, 3];
const history: History = [{ sortedArray: [], remainingArray: structuredClone(startingArray) }]
insertionSort2(startingArray, [], (sortedArray, remainingArray) => history.push({ sortedArray, remainingArray }))
console.log(history)

export function InsertionSort() {
    const [stepToShow, setStepToShow] = useState(history[0])

    //write a useEffect to display the new array every time a change happens
    useEffect(
        () => {
            history.forEach((element, index, array) => setTimeout(() => setStepToShow(history[index]), 200 * index))
        }
        , [])

    return (
        <>
            <div>
                <label>Insert Sort</label>
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
            <label>SORTED ARRAY</label>
            <div className="flex p-4">
                {stepToShow.sortedArray.map((item, idx) => (
                    <div key={idx}>
                        <div className="mx-px p-3" style={{ height: `${item * 10}px`, width: '10px', background: 'green' }} />
                    </div>
                )
                )}
            </div>
            <div className="flex">
                <label> REMAINING ARRAY </label>
                <div className="flex p-4">
                    {stepToShow.remainingArray.map((item, idx) => (
                        <div key={idx}>
                            <div className="mx-px p-3" style={{ height: `${item * 10}px`, width: '10px', background: 'orange' }} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}