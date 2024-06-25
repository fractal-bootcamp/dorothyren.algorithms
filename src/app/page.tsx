'use client';

//links to search, sort, path planning visualization pages

export default function Home() {
    return (
        <div id="HomeContainer">
            <div className="text-xl pb-5">Home Page</div>
            <ul>
                <a href="/pathplanning">Path Planning</a>
            </ul>
            <ul>
                <a href="/search">Search</a>
            </ul>
            <ul>
                <a href="/sort">Sort</a>
            </ul>
        </div >
    )
}