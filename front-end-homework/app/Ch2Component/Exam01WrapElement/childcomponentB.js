export default function ChildComponentB() {
    return (
        <section className="mb-4 overflow-hidden rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm">
            <header className="border-b border-gray-200 bg-gray-100 px-4 py-3">
                <h2 className="font-semibold">ChildComponentA</h2>
            </header>
            <div className="p-4">
                싱글파일 컴포넌트: UI 컴포넌트를 ChildComponentB.js에 정의하고 파일 경로로 import합니다.
            </div>
        </section>
    );
}
