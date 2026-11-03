export default function Exam10NestedLayout({ children }) {
    return (
        <section className="overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-100 shadow-sm">
            <header className="border-b border-zinc-700 bg-zinc-800 px-4 py-3">
                <h2 className="font-semibold">Exam10NestedLayout</h2>
            </header>
            <div className="p-4">{children}</div>
        </section>
    );
}
