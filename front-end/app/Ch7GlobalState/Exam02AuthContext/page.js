
"use client"

import { AuthContext } from "@/Contexts/AuthContext";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useContext } from "react";

export default function Exam02AuthContext() {
    const authContext = useContext(AuthContext);

    const handlelogout = ()=> {
        authContext.setMemberId("");
        authContext.setJwt("");
        localStorage.removeItem("memberId");
        localStorage.removeItem("jwt");
        redirect("/Ch7GlobalState/Exam02AuthContext/LoginComponent");
    };
    return (
        <div className="p-4">
            <section className="overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-100 shadow-sm">
                <header className="border-b border-zinc-700 bg-zinc-800 px-4 py-3">
                    <h2 className="font-semibold">Exam02AuthContext</h2>
                </header>
                {authContext.memberId ?(
                <div className="p-4">
                    <button
                        onClick={handlelogout}
                        className="inline-flex items-center rounded-lg bg-yellow-400 px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-yellow-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-400"
                    >
                        로그아웃
                    </button>
                </div>
                ) : (
                <div className="p-4">
                    <Link
                        href="/Ch7GlobalState/Exam02AuthContext/LoginComponent"
                        className="inline-flex items-center rounded-lg bg-yellow-400 px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-yellow-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-400"
                    >
                        로그인
                    </Link>
                </div>
                )}
            </section>
        </div>
    );
}
