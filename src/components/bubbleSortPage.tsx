'use client';

import { start } from "repl";
import { bubbleSortWithCallback } from "../algorithms/bubbleSort"

import { useEffect, useState } from "react";

//created starting array for visualization 
const startingArray = [5, 13, 9, 4, 12, 7, 1, 6, 8, 10, 2, 11, 3];
//initiated history array to start capturing the history of arrays
const history = [startingArray]
//bubbleSortWithCallback takes in 2 arguments: an array and a callback function
//in this case the callback function takes an array and pushes the changed array to a list of arrays
bubbleSortWithCallback(startingArray, (arr) => history.push(arr));

export function BubbleSort() {

  const [stepToShow, setStepToShow] = useState(history[0])

  //useEffect takes in 2 things
  //first, write a function that runs anytime a reactive value updates (props or state change)
  //second is the dependency, in this case it is an empty array 
  useEffect(
    () => {
      //forEach array in the history array, update the stepToShow by walking through the index spot in the history array
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
              <div className="mx-px p-3" style={{ height: `${item * 10}px`, width: '10px', background: 'purple' }} />
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
              <div className="mx-px p-3" style={{ height: `${item * 10}px`, width: '10px', background: 'orange' }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
