export default function Exam11RuntimeErrorHandling() {
    
    var name="함배루";

    return (
        <section className="overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-100 shadow-sm">
            <header className="border-b border-zinc-700 bg-zinc-800 px-4 py-3">
                <h2 className="font-semibold">Exam11RuntimeErrorHandling</h2>
            </header>
            <div className="p-4">
                런타임 오류 처리
                {name.length}
            </div>
        </section>
    );
}
