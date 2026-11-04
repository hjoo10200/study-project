"use client"

import { redirect, useRouter } from "next/navigation";

export default function Exam01Navigation() {
    //Router 얻기
    const router = useRouter();
    const handleClick = () => {
    // 코드 상에서 어떤 조건이 될 경우, 자동 이동(로그인,회원가입 처리 후 자동이동)
    //   redirect("/");  
    
    // 특정 경로로 이동을 할 경우(일반적인 경우)
    router.push("/Ch2Component")

};

    return (
        <div className="p-4">
            <section className="overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-100 shadow-sm">
                <header className="border-b border-zinc-700 bg-zinc-800 px-4 py-3">
                    <h2 className="font-semibold">Exam01Navigation</h2>
                </header>
                <div className="p-4">
                    <button 
                    onClick={handleClick}
                    type="button" 
                    className="rounded bg-yellow-400 px-3 py-1 text-sm text-zinc-900 hover:bg-yellow-300">
                        버튼
                    </button>
                </div>
            </section>
        </div>
    );
}
