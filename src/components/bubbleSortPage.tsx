'use client';

import { start } from "repl";
import { bubbleSortWithCallback } from "../algorithms/bubbleSort"

import { useEffect, useState } from "react";

const startingArray = [5, 3, 9, 4, 2, 7, 1, 6, 8];
const history = [startingArray]
bubbleSortWithCallback(startingArray, (arr) => history.push(arr));

export function BubbleSort() {
  const [stepToShow, setStepToShow] = useState(history[0])

  useEffect(
    () => {
      history.forEach((element, index, array) => setTimeout(() => setStepToShow(history[index]), 200 * index)) // for many indexes
    }
    , [])

  return (
    <div className="flex p-8">
      <div>
        <label className="pr-6 text-xl">Bubble Sort</label>
      </div>
      <div>
        <label>Initial Array</label>
        <div className="flex p-4">
          {startingArray.map((item, idx) => (
            <div key={idx}>
              <div className="mx-px p-3" style={{ height: `${item * 10}px`, width: '10px', background: 'blue' }} />
            </div>
          ))}
        </div>
      </div>
      {/* <label>Pre-sort Array</label>
      <div className="flex p-4">
        {array.map((item, idx) => (
          <div key={idx} className="mx-px p-3" style={{ height: `${item * 10}px`, width: '10px', background: 'blue' }} />
        ))}
      </div> */}
      <div className="flex">
        <label>Sorted Array</label>
        <div className="flex p-4">
          {stepToShow.map((item, idx) => (
            <div key={idx}>
              <div className="mx-px p-3" style={{ height: `${item * 10}px`, width: '10px', background: 'green' }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
