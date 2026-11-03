"use client"

import { useState } from "react";

export default function Exam03ObjectTypeState() {

    //상태 정의
    const [state, setState] = useState({
        number: 0,
        color: "blue"
    });

    const addNumber = () => {
        //상태 변경 함수를 통해서 상태 변경
        //const newState = {number: state.number+1,color: state.color};
        const newState = { ...state, number: state.number + 1 };//구조분해:...state -> 안에 있는 속성을 분해해서 나열한다.
        // setState(newState);

        //  setState({...state, number: state.number+1});
        setState((currState) => ( { ...currState, number: currState.number+1 }));
        ;
        setState((currState) => {
            return { ...currState, number: currState.number+1 };
    });    

};

const changeColor = () => {
    const newColor = '#' + Math.floor(Math.random() * parseInt("ffffff", 16)).toString(16);
    setState({ ...state, color: newColor });
};

return (
    <section className="overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-100 shadow-sm">
        <header className="border-b border-zinc-700 bg-zinc-800 px-4 py-3">
            <h2 className="font-semibold">Exam03ObjectTypeState</h2>
        </header>
        <div className="p-4">
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
                <span aria-hidden="true" className="text-lg leading-none">@</span>
                색 변경
            </button>
        </div>
    </section>
);
}
