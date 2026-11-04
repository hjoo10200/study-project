"use client"
import Image from "next/image";
export default function ChildComponent({imgFile, changeImg}) {
    return (
        <section className="mb-4 overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-100 shadow-sm">
            <header className="border-b border-zinc-700 bg-zinc-800 px-4 py-3">
                <h2 className="font-semibold">ChildComponent</h2>
            </header>
            <div className="p-4">
                <Image src={`/images/${imgFile}`} height={500} width={300} style={{ width: "200px", height: "auto" }} alt=""></Image>
                <button
                    type="button"
                    onClick={changeImg}
                    className="mt-4 inline-flex cursor-pointer items-center gap-2 rounded-lg bg-yellow-400 px-5 py-2.5 text-sm font-semibold text-zinc-950 shadow-sm transition duration-150 hover:bg-yellow-300 hover:shadow-md active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-400 motion-reduce:transition-none motion-reduce:active:scale-100"
                >
                    <span aria-hidden="true">↻</span>
                    이미지 변경
                </button>

            </div>
        </section>
    );
}
