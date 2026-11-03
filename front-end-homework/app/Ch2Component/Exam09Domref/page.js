"use client"

import { useRef } from "react";
// TODO: 필요한 클라이언트 지시문과 import를 이 파일 위쪽에 직접 작성하세요.

export default function Exam09Domref() {
    const inputRef = useRef();
    const handlekeyDown = () =>{
        inputRef.current.style.backgroundColor="skyblue";
        const inputRef2 = document.querySelector("input[name=example]")
        console.log(inputRef2)
    }

    const handleClick = () => {
        console.log(inputRef.current.value)
    };
    // TODO: 필요한 변수, 상태와 이벤트 함수는 직접 작성하세요.

    return (
        <section className="mb-4 overflow-hidden rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm">
            <header className="border-b border-gray-200 bg-gray-100 px-4 py-3">
                <h2 className="font-semibold">Exam09Domref</h2>
            </header>
            <div className="space-y-2 p-4">
            <label>텍스트 입력</label>
            <div>
                <input 
                    ref={inputRef}
                    onKeyDown={handlekeyDown}
                    name="example"
                    type="text"
                    placeholder="텍스트를 입력하라"
                    className="min-w-0 rounded border border-zinc-600 px-3 py-2 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"/>
                <button
                    type="button"
                    onClick={handleClick}
                    className="rounded bg-yellow-400 px-6 py-2 text-black hover:bg-yellow-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400">
                        확인
                    </button>
                    </div>
            </div>
        </section>
    );
}