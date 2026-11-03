export default function ChildComponentA() {
    return (
        <section className="mb-4 overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-100 shadow-sm">
            <header className="border-b border-zinc-700 bg-zinc-800 px-4 py-3">
                <h2 className="font-semibold">ChildComponentA</h2>
            </header>
            <div className="p-4">
                폴더 컴포넌트: UI 컴포넌트를 폴더 안의 index.js에 정의하고 폴더 경로로 import합니다.
            </div>
        </section>
    );
}
