'use client';
import { SelectionSort } from "@/components/selectionSortPage";
//links to search, sort, path planning visualization pages
import { BubbleSort } from "../../components/bubbleSortPage";
import { InsertionSort } from "@/components/insertSortPage";

export default function Home() {
    return (
        <div id="sortPage">
            <div>
                <BubbleSort />
                <SelectionSort />
                <InsertionSort />
            </div>
            <div>

            </div>
        </div>
    )
}