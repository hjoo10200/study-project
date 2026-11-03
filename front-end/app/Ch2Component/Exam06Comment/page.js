export default function Exam06Comment() {
    // 자바스크립트 영역의 주석
    return (
        <section className="overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-100 shadow-sm">
            <header className="border-b border-zinc-700 bg-zinc-800 px-4 py-3">
                <h2 className="font-semibold">Exam06Comment</h2>
            </header>
            <div // react에서는 class가 아니고 className으로 css 클래스를 지정 
            className="space-y-2 p-4">
                {/* JSX 영역의 주석 */}
                <p>JSX 주석은 화면에 표시되지 않습니다.</p>
            </div>
        </section>
    );
}
