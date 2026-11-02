import ChildComponentA from "./childcomponentA";
import ChildComponentB from "./childcomponentB";

export default function Exam01WrapElement() {
    // TODO: 필요한 변수, 함수 또는 스타일 객체를 직접 작성하세요.

    return (
        <section className="mb-4 overflow-hidden rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm">
            <header className="border-b border-gray-200 bg-gray-100 px-4 py-3">
                <h2 className="font-semibold">Exam01WrapElement</h2>
            </header>
            <div className="space-y-2 p-4">
                <ChildComponentA></ChildComponentA>
                <ChildComponentB/>
            </div>    
        </section>
    );
}