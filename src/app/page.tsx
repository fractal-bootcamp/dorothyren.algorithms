'use client';

import { bubbleSortWithCallback } from "./algorithms/bubbleSort"

import { useEffect, useState } from "react";

const INITIAL_ARRAY = [5, 3, 8, 4, 2];

export default function BubbleSort() {
    const [array, setArray] = useState(INITIAL_ARRAY);

    const sortedArray = bubbleSortWithCallback([...array], console.log)

    return (
        <div>
            Gonna visualize bubble sort here
            <div className="flex">
                {INITIAL_ARRAY.map((item, idx) => (
                    <div key={idx} className="mx-px" style={{ height: `${item * 10}px`, width: '10px', background: 'blue' }} />
                ))}
            </div>
            <div className="flex">
                {array.map((item, idx) => (
                    <div key={idx} className="mx-px" style={{ height: `${item * 10}px`, width: '10px', background: 'blue' }} />
                ))}
            </div>
            <div className="flex">
                {sortedArray.map((item, idx) => (
                    <div key={idx} className="mx-px text-emerald-600" style={{ height: `${item * 10}px`, width: '10px', background: 'green' }} />
                ))}
            </div>
        </div>
    );
}