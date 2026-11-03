"use client"

import Image from "next/image";

export default function AppHeader(){
    return (
        <div className="flex items-center gap-3 bg-black px-4 py-2 text-white">
            <Image
                src="/logo.png"
                alt="로고"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
            />
            React
            <button
                type="button"
                className="ml-auto rounded border border-yellow-400 bg-yellow-400 px-6 py-2 text-black transition-colors hover:border-yellow-300 hover:bg-yellow-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
            >
                버튼
            </button>
        </div>
    );
}
