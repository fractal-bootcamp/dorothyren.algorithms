'use client';
//links to search, sort, path planning visualization pages
import { BubbleSort } from "../../components/bubbleSortPage";

export default function Home() {
    return (
        <div id="sortPage">
            <div>
                <BubbleSort />
            </div>
        </div>
    )
}