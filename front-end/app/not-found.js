import Link from "next/link";

export default function NotFound() {
    return (
        <div className="p-4">
            <section className="overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-100 shadow-sm">
                <header className="border-b border-zinc-700 bg-zinc-800 px-4 py-3">
                    <h2 className="font-semibold">NotFound</h2>
                </header>
                <div className="space-y-4 p-4">
                    <h1 className="text-xl font-semibold">잘못된 URL입니다.</h1>
                    <p className="text-zinc-300">요청하신 페이지를 찾을 수 없습니다. 주소를 확인해 주세요.</p>
                    <Link
                        href="/"
                        className="inline-block rounded bg-yellow-400 px-6 py-2 text-black hover:bg-yellow-300"
                    >
                        홈으로 돌아가기
                    </Link>
                </div>
            </section>
        </div>
    );
}
