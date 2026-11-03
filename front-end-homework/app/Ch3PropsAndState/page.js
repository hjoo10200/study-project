export default function Ch3PropsAndState() {
    return (
        <div className="p-4 text-gray-900">
            <section className="mb-4 border border-gray-200 bg-white">
                <header className="border-b border-gray-200 bg-gray-100 px-4 py-3"><h1 className="font-semibold">Ch3PropsAndState 복습</h1></header>
                <div className="space-y-2 p-4">
                    <p>Tailwind 제목줄과 빈 본문만 준비되어 있습니다. 함수·버튼·입력창·상태·props는 직접 작성하세요.</p>
                    <p>파일 구조의 정답은 제시하지 않습니다. 필요한 역할을 생각해 이름과 위치를 정하세요.</p>
                    <a className="text-blue-700 underline" href="/Ch2Component">ch2 복습 안내</a>
                </div>
            </section>
            <section className="mb-4 border border-gray-200 bg-white">
                <header className="border-b border-gray-200 bg-gray-100 px-4 py-3"><h2 className="font-semibold">1. Exam01Props — props</h2></header>
                <div className="space-y-2 p-4">
                    <p>구조 힌트: 부모가 값을 전달하고 자식이 받아 보여주는 역할이 필요합니다.</p>
                    <p>자식 컴포넌트, 전달할 값, 기본값과 children의 출력 요소를 직접 작성하세요.</p>
                    <p>확인: 전달한 값과 생략했을 때의 기본값을 비교할 수 있어야 합니다.</p>
                    <a className="text-blue-700 underline" href="/Ch3PropsAndState/Exam01Props">실습 화면 열기</a>
                </div>
            </section>
            <section className="mb-4 border border-gray-200 bg-white">
                <header className="border-b border-gray-200 bg-gray-100 px-4 py-3"><h2 className="font-semibold">2. Exam02PrimitiveTypeState — 기본형 상태</h2></header>
                <div className="space-y-2 p-4">
                    <p>숫자·색상 상태, 값을 변경할 함수, 숫자 출력 요소와 버튼을 직접 작성하세요.</p>
                    <p>확인: 클릭할 때 숫자나 색상이 바뀌어야 합니다.</p>
                    <a className="text-blue-700 underline" href="/Ch3PropsAndState/Exam02PrimitiveTypeState">실습 화면 열기</a>
                </div>
            </section>
            <section className="mb-4 border border-gray-200 bg-white">
                <header className="border-b border-gray-200 bg-gray-100 px-4 py-3"><h2 className="font-semibold">3. Exam03ObjectTypeState — 객체 상태</h2></header>
                <div className="space-y-2 p-4">
                    <p>객체 상태, 속성을 변경할 함수, 출력 요소와 버튼을 직접 작성하세요.</p>
                    <p>힌트: 한 속성을 바꿀 때 다른 속성은 유지해야 합니다. 함수형 업데이터도 비교해보세요.</p>
                    <a className="text-blue-700 underline" href="/Ch3PropsAndState/Exam03ObjectTypeState">실습 화면 열기</a>
                </div>
            </section>
            <section className="mb-4 border border-gray-200 bg-white">
                <header className="border-b border-gray-200 bg-gray-100 px-4 py-3"><h2 className="font-semibold">4. Exam04FormState — 폼 상태</h2></header>
                <div className="space-y-2 p-4">
                    <p>이름·이메일 입력창, 제출 버튼, 상태와 이벤트 함수, 제출 결과 영역을 모두 직접 작성하세요.</p>
                    <p>힌트: 입력 요소의 이름과 값을 이용해 해당 필드만 바꾸고 제출 여부에 따라 결과를 표시합니다.</p>
                    <a className="text-blue-700 underline" href="/Ch3PropsAndState/Exam04FormState">실습 화면 열기</a>
                </div>
            </section>
            <section className="mb-4 border border-gray-200 bg-white">
                <header className="border-b border-gray-200 bg-gray-100 px-4 py-3"><h2 className="font-semibold">5. Exam05StateToProp — 상태를 props로 전달</h2></header>
                <div className="space-y-2 p-4">
                    <p>구조 힌트: 부모는 상태를 관리하고 자식은 이미지와 버튼을 표시하는 역할을 합니다.</p>
                    <p>이미지 상태와 변경 함수, 자식 컴포넌트의 이미지·버튼과 props 연결을 직접 작성하세요.</p>
                    <p>확인: 자식 버튼을 누르면 부모 상태가 바뀌고 이미지가 바뀌어야 합니다.</p>
                    <a className="text-blue-700 underline" href="/Ch3PropsAndState/Exam05StateToProp">실습 화면 열기</a>
                </div>
            </section>
        </div>
    );
}