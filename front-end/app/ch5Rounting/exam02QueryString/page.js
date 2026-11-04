"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Exam02QueryString() {

    const router= useRouter();
    const [key1,setKey1] =useState("value1");
    const [key2,setKey2] =useState("value2");    

    const handleClick = () =>{
        router.push(`exam02QueryString/componentA?key1=${key1}&key2=${key2}`);

    };


    return (
        <div className="p-4">
            <section className="overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-100 shadow-sm">
                <header className="border-b border-zinc-700 bg-zinc-800 px-4 py-3">
                    <h2 className="font-semibold">Exam02QueryString</h2>
                </header>
                <div className="flex flex-wrap gap-4 p-4">
                    <Link href={`/ch5Rounting/exam02QueryString/componentA?key1=${key1}&key2=${key2}`} className="inline-flex items-center rounded bg-yellow-400 px-3 py-1 text-sm text-zinc-900 hover:bg-yellow-300">componentA</Link>
                    <Link href={`exam02QueryString/componentA?key1=${key1}&key2=${key2}`} className="inline-flex items-center rounded bg-yellow-400 px-3 py-1 text-sm text-zinc-900 hover:bg-yellow-300">componentA</Link>
                    <button onClick={handleClick} type="button" className="rounded bg-yellow-400 px-3 py-1 text-sm text-zinc-900 hover:bg-yellow-300">
                        componentA
                    </button>
                </div>
            </section>
        </div>
    );
}
