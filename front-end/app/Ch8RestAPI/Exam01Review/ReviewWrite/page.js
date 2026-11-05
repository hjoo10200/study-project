import Link from "next/link";

export default function BoardWrite() {
    return (
        <div className="min-w-0 p-4">
            <section className="overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-100 shadow-sm">
                <header className="flex items-center justify-between gap-4 border-b border-zinc-700 bg-zinc-800 px-4 py-3">
                    <h2 className="font-semibold">상품 후기 작성</h2>
                    <Link href="/Ch8RestAPI/Exam01Review" className="rounded border border-zinc-600 px-3 py-2 text-sm hover:bg-zinc-700">
                        목록으로
                    </Link>
                </header>
                <div className="p-4 text-sm text-zinc-300">
                    상품 후기를 작성하는 페이지입니다.
                </div>
            </section>
        </div>
    );
}
