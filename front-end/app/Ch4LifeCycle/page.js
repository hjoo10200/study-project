"use client"

import { useEffect, useState } from "react";

export default function Ch4LifeCycle() {


    //상태 정의
    const [count1, setCount1] = useState(1);
    const [count2, setCount2] = useState(101);


    //react에서는 use로 시작하는 함수를 hook이라고 한다. 특정 시점에 자동으로 실행하는 프로그램이다.
    useEffect(() => {
        console.log("마운트 상태")
        return () => {
            console.log("언마운트 상태");
        }
    }, []);// []이 있으면 마운트/언마운트에서만 작동, 없으면 업데이트 시에도 작동

    useEffect(() => {
        console.log("마운트 상태/count1 때문에 업데이트 후 실행")
        return () => {
            console.log("언마운트 상태/count1 때문에 업데이트 전 실행");
        }
    }, [count1]);//[]안에 


    


    return (
        <div className="p-4">
            <section className="overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-100 shadow-sm">
                <header className="border-b border-zinc-700 bg-zinc-800 px-4 py-3">
                    <h2 className="font-semibold">Ch4LifeCycle</h2>
                </header>
                <div className="flex flex-wrap gap-4 p-4">
                    <button type="button"
                        onClick={() => setCount1((prev) => prev + 1)}
                        className="rounded bg-yellow-400 px-4 py-2 text-zinc-900 hover:bg-yellow-300">
                        count: {count1}
                    </button>
                    <button type="button"
                        onClick={() => setCount2((prev) => prev + 1)}
                        className="rounded bg-yellow-400 px-4 py-2 text-zinc-900 hover:bg-yellow-300">
                        count: {count2}
                    </button>
                </div>
            </section>
        </div>
    );
}
