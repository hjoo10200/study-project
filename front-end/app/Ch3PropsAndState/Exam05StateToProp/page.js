


"use client";

import { useState } from "react";
import ChildComponent from "./ChildComponent";



export default function Exam05StateToProp() {
// 상태 정의
const [imgFile, setImgFile]= useState("photo13.jpg")

// 함수 정의
const changeImg = () => {
    if(imgFile === "photo13.jpg"){
        setImgFile("photo12.jpg")
    } else{
        setImgFile("photo13.jpg")
    }
    
};

return (
        <section className="overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-100 shadow-sm">
            <header className="border-b border-zinc-700 bg-zinc-800 px-4 py-3">
                <h2 className="font-semibold">Exam05StateToProp</h2>
            </header>
            <div className="p-4">
                <ChildComponent imgFile={imgFile} changeImg={changeImg}/>
            </div>
        </section>
    );
}
