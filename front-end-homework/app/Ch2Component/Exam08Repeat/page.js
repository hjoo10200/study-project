// TODO: 필요한 클라이언트 지시문과 import를 이 파일 위쪽에 직접 작성하세요.

import RepeattableRow from "./RepeattableRow";
import RepeatWithIndex from "./RepeatWithIndex";

 
export default function Exam08Repeat() {
    // TODO: 필요한 변수, 상태와 이벤트 함수는 직접 작성하세요.

    return (
        <section className="mb-4 overflow-hidden rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm">
            <header className="border-b border-gray-200 bg-gray-100 px-4 py-3">
                <h2 className="font-semibold">Exam08Repeat</h2>
            </header>
            <div className="space-y-2 p-4">
               <RepeattableRow></RepeattableRow>
               <RepeatWithIndex></RepeatWithIndex> {/* TODO: 하위 컴포넌트를 직접 import하고 여기에 배치하세요. */}
            </div>
        </section>
    );
}