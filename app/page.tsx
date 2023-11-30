import React from "react";
import Movies from "./components/getMovie/getmovies";
import Navigation from "./components/navigation/page";


export default function Home(){
    return (
        <main>
            <div>
            <Navigation/>
                <Movies/>
               
            </div>
        </main>
    )
};