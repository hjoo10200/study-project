// TODO: 필요한 클라이언트 지시문과 import를 이 파일 위쪽에 직접 작성하세요.

import ChildComponent from "./ChildComponent";
import Image from "next/image";

export default function Exam01Props() {
    // TODO: 필요한 변수, 상태와 이벤트 함수는 직접 작성하세요.

    return (
        <section className="mb-4 overflow-hidden rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm">
            <header className="border-b border-gray-200 bg-gray-100 px-4 py-3">
                <h2 className="font-semibold">Exam01Props</h2>
            </header>
            <div className="space-y-2 p-4">
                <ChildComponent name="react" version={19} data={10}>
                    <Image src={'/images/photo10.jpg'}
                        alt="사진10"
                        width={705}
                        height={444}
                        className="h-auto max-w-full rounded"
                        style={{ width: "200px", height: "auto" }}></Image>
                </ChildComponent>{/* TODO: 자식 컴포넌트를 직접 만들고 props 전달, 기본값, children 출력까지 작성하세요. */}
            </div>
        </section>
    );
}