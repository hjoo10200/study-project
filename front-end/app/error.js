"use client";

import Link from "next/link";

export default function ErrorPage() {
    return (
        <div className="p-4">
            <section className="overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-100 shadow-sm">
                <header className="border-b border-zinc-700 bg-zinc-800 px-4 py-3">
                    <h2 className="font-semibold">ErrorPage</h2>
                </header>
                <div role="alert" className="space-y-4 p-4">
                    <h1 className="text-xl font-semibold">페이지를 표시하는 중 오류가 발생했습니다.</h1>
                    <p className="text-zinc-300">잠시 후 다시 시도하거나 홈으로 이동해 주세요.</p>
                    <Link
                        href="/"
                        className="inline-block rounded bg-yellow-400 px-6 py-2 text-black hover:bg-yellow-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
                    >
                        홈으로 돌아가기
                    </Link>
                </div>
            </section>
        </div>
    );
}
