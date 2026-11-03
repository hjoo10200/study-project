"use client"

import { useState } from "react";

export default function Exam02PrimitiveTypeState() {
    console.log("상태가 렌더링 또는 리렌더링 됨")
// 상태 정의
const [number,setNumber] = useState(0);
const [color,setColor] = useState("lightgreen");
//이벤트 처리 함수
const addNumber = () => {
    //상태 변경 함수를 통해서 상태 변경
    setNumber(number + 1);
};

const changeColor = () => {
   const newColor = '#' + Math.floor(Math.random() * parseInt("ffffff", 16)).toString(16);
   setColor(newColor)
};



    return (
        <section className="overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-100 shadow-sm">
            <header className="border-b border-zinc-700 bg-zinc-800 px-4 py-3">
                <h2 className="font-semibold">Exam02PrimitiveTypeState</h2>
            </header>
            <div className="p-4">
                <h1 style={{color: color, fontSize: "2em"}}>{number}</h1>
                <div className="flex flex-wrap gap-3">
                <button
                    type="button"
                    onClick={addNumber}
                    className="mt-3 inline-flex cursor-pointer items-center gap-2 rounded-lg bg-yellow-400 px-5 py-2.5 text-sm font-semibold text-zinc-950 shadow-sm transition duration-150 hover:bg-yellow-300 hover:shadow-md active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-400 motion-reduce:transition-none motion-reduce:active:scale-100"
                >
                    <span aria-hidden="true" className="text-lg leading-none">+</span>
                    숫자 증가
                </button>
                <button
                    type="button"
                    onClick={changeColor}
                    className="mt-3 inline-flex cursor-pointer items-center gap-2 rounded-lg bg-yellow-400 px-5 py-2.5 text-sm font-semibold text-zinc-950 shadow-sm transition duration-150 hover:bg-yellow-300 hover:shadow-md active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-400 motion-reduce:transition-none motion-reduce:active:scale-100"
                >
                    <span aria-hidden="true" className="text-lg leading-none">@</span>
                    색 변경
                </button>
                </div>
            </div>
        </section>
    );  
}
