"use client"

import { useRef } from "react";

export default function Exam09Domref() {

    const inputRef= useRef();
    const handleKeyDown = () => {
        inputRef.current.style.backgroundColor="skyblue";
        const inputRef2 =document.querySelector("input[name='domref-text']")
        console.log(inputRef2)
    };

    const handleClick = () => {
        console.log(inputRef.current.value)
    };
        

    return (
        <section className="overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-100 shadow-sm">
            <header className="border-b border-zinc-700 bg-zinc-800 px-4 py-3">
                <h2 className="font-semibold">Exam09Domref</h2>
            </header>
            <div className="space-y-3 p-4">
                <label htmlFor="domref-text" className="block text-sm font-medium">
                    텍스트 입력
                </label>
                <div className="flex flex-wrap items-center gap-3">
                    <input
                        ref={inputRef}
                        onKeyDown={handleKeyDown}
                        name="domref-text"
                        type="text"
                        placeholder="텍스트를 입력하세요"
                        className="min-w-0 rounded border border-zinc-600 px-3 py-2 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                    <button
                        type="button"
                        onClick={handleClick}
                        className="rounded bg-yellow-400 px-6 py-2 text-black hover:bg-yellow-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
                    >
                        확인
                    </button>
                </div>
            </div>
        </section>
    );
}
