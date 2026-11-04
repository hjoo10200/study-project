"use client"

import { ColorContext } from "@/Contexts/ColorContext";
import { useContext } from "react";

export default function UIComponentA() {
    // ColorContext 전역 상태를 사용하겠다.
    const colorContext =useContext(ColorContext);

    const colors= ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
    
    const handleClick = (color) => {
        colorContext.setColor(color);
    };


    return (
        <section id="UIComponentA" className="scroll-mt-4 overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-100 shadow-sm">
            <header className="border-b border-zinc-700 bg-zinc-800 px-4 py-3">
                <h2 className="font-semibold">UIComponentA</h2>
            </header>
            <div className="flex items-center gap-2 p-4">
                {colors.map((color, index) => (
                    <div onClick={() => handleClick(color)} key={index} className="box-border h-6 w-6 shrink-0 cursor-pointer border-2 border-zinc-400" style={{background: color}}>
                    
                    </div>
                ))}

                

            </div>
            <hr/>
            <p>color 전역 상태: {colorContext.color}</  p>

        </section>
    );
}
