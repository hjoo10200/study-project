"use client"

import { useSearchParams } from "next/navigation";

export default function ComponentA() {

    const querystring = useSearchParams();

    const key1 =querystring.get("key1");
    const key2 =querystring.get("key2");

    return (
        <div className="p-4">
            <section className="overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-100 shadow-sm">
                <header className="border-b border-zinc-700 bg-zinc-800 px-4 py-3">
                    <h2 className="font-semibold">ComponentA</h2>
                </header>
                <div className="p-4">
                    <p>key1: {key1}</p>
                    <p>key2; {key2}</p>
                </div>

            </section>
        </div>
    );
}
