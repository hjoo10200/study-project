"use client"


import { ColorContext } from "@/Contexts/ColorContext";
import { useContext } from "react";

export default function UIComponentB() {

    //ColorContext 전역 상태를 사용한다.
    const colorContext = useContext(ColorContext);
    return (
        <section id="UIComponentB" className="scroll-mt-4 overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-100 shadow-sm">
            <header className="border-b border-zinc-700 bg-zinc-800 px-4 py-3">
                <h2 className="font-semibold">UIComponentB</h2>
            </header>
            <div className="p-4">
                <div role="alert" className="rounded border px-4 py-3 text-white" style={{ backgroundColor: colorContext.color }}>
                    <strong className="font-semibold">{colorContext.color}</strong>
                    <p className="mt-1 text-sm">색을 확인해 주세요.</p>
                </div>
            </div>
        </section>
    );
}
