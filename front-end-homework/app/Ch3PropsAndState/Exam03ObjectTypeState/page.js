// TODO: 필요한 클라이언트 지시문과 import를 이 파일 위쪽에 직접 작성하세요.
"use client"

import { useState } from "react";

export default function Exam03ObjectTypeState() {
    // TODO: 필요한 변수, 상태와 이벤트 함수는 직접 작성하세요.

const [state, setState]=useState({
    number:0,
    color:"blue"
})

const addNumber = () => {
    const newState = {...state, number:state.number+1};

    // setState(newState)

    setState((currState) => ({...currState,  number:currState.number+1}))
}   

const changeColor = () => {
    const newColor = '#' + Math.floor(Math.random() * parseInt("ffffff", 16)).toString(16);
    setState((currState) => ({...currState,  color:newColor}))
}   ;
   




    return (
        <section className="mb-4 overflow-hidden rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm">
            <header className="border-b border-gray-200 bg-gray-100 px-4 py-3">
                <h2 className="font-semibold">Exam03ObjectTypeState</h2>
            </header>
            <div className="space-y-2 p-4">
                            <h1 style={{ color: state.color, fontSize: "2em" }}>{state.number}</h1>
            <div className="flex flex-wrap gap-3"></div>
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
                <span aria-hidden="true" className="text-lg leading-none">@ 색변경</span>
            </button>    {/* 색 변경
            </button>
            TODO: 객체 상태, 속성별 변경 함수, 숫자 출력과 버튼을 직접 작성하세요. */}
            </div>
        </section>
    );
}