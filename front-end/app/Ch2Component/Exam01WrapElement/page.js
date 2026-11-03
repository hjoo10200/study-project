import ChildComponentA from "./ChildComponentA";
import ChildComponentB from "./ChildComponentB";

export default function Exam01WrapElement() {
    return (
        <section className="mb-4 overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-100 shadow-sm">
            <header className="border-b border-zinc-700 bg-zinc-800 px-4 py-3">
                <h2 className="font-semibold">Exam01WrapElement</h2>
            </header>
            <div className="space-y-2 p-4">
                UI 컴포넌트를 폴더 구조와 싱글 파일 구조로 만들고 import하여 사용합니다.
                <ChildComponentA></ChildComponentA>
                <ChildComponentB />
            </div>
        </section>
    );
}
