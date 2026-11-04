import UIComponentA from "./UIComponentA";
import UIComponentB from "./UIComponentB";

export default function Exam1ColorContext() {
    return (
        <div className="p-4">
            <section className="overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-100 shadow-sm">
                <header className="border-b border-zinc-700 bg-zinc-800 px-4 py-3">
                    <h2 className="font-semibold">Exam1ColorContext</h2>
                </header>
                <div className="space-y-4 p-4">
                    <UIComponentA />
                    <UIComponentB />
                </div>
            </section>
        </div>
    );
}
