"use client"
import { useState } from "react";
// TODO: 필요한 클라이언트 지시문과 import를 이 파일 위쪽에 직접 작성하세요.

export default function Exam02PrimitiveTypeState() {
    // TODO: 필요한 변수, 상태와 이벤트 함수는 직접 작성하세요.

    const [number, setNumber] = useState(0);
    const [color,setColor] = useState("yellow");

    const addNumber = () =>  {
        setNumber(number+1)
    }

    const changeColor = () => {
        const newColor = '#' + Math.floor(Math.random() * parseInt("ffffff", 16)).toString(16);
        setColor(newColor)
    }

    return (
        <section className="mb-4 overflow-hidden rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm">
            <header className="border-b border-gray-200 bg-gray-100 px-4 py-3">
                <h2 className="font-semibold">Exam02PrimitiveTypeState</h2>
            </header>
            <div className="space-y-2 p-4">
                <h1 style={{color: color, fontSize: "2em"}}>{number}</h1>
                <div>
                    <button
                        type="button"
                        onClick={addNumber}
                        className="mt-3 inline-flex cursor-pointer items-center gap-2 rounded-lg bg-yellow-400 px-5 py-2.5 text-sm font-semibold text-zinc-950 shadow-sm transition duration-150 hover:bg-yellow-300 hover:shadow-md active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-400 motion-reduce:transition-none motion-reduce:active:scale-100">
                            숫자증가
                        </button>

                    <button
                        type="button"
                        onClick={changeColor}
                        className="mt-3 inline-flex cursor-pointer items-center gap-2 rounded-lg bg-yellow-400 px-5 py-2.5 text-sm font-semibold text-zinc-950 shadow-sm transition duration-150 hover:bg-yellow-300 hover:shadow-md active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-400 motion-reduce:transition-none motion-reduce:active:scale-100">
                            색변경
                        </button>
   
                </div>
                {/* TODO: 상태 선언, 숫자 증가·색 변경 함수, 출력 요소와 버튼을 모두 직접 작성하세요. */}
            </div>
        </section>
    );
}