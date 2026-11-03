import RepeattableRow from "./RepeattableRow";
import RepeatWithIndex from "./RepeatWithIndex";

export default function Exam08Repeat() {


    return (
        <section className="overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-100 shadow-sm">
            <header className="border-b border-zinc-700 bg-zinc-800 px-4 py-3">
                <h2 className="font-semibold">Exam08Repeat</h2>
            </header>
            <div className="p-4">
            <RepeattableRow></RepeattableRow>
            <RepeatWithIndex>
            </RepeatWithIndex>
            </div>
        </section>
    );
}
