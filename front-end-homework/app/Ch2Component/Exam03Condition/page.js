export default function Exam03Condition() {
    // TODO: 필요한 변수, 함수 또는 스타일 객체를 직접 작성하세요.
    const var1= "react"
    return (
        <section className="mb-4 overflow-hidden rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm">
            <header className="border-b border-gray-200 bg-gray-100 px-4 py-3">
                <h2 className="font-semibold">Exam03Condition</h2>
            </header>
            <div className="space-y-2 p-4">
                <div>{(var1==="react")? <p>true</p>:<p>false</p>}</div>
                <div>{(var1!=="react")? true:false}</div>
                <div>{(var1==="react")&& <p>내용1</p>}</div>
                <div>{(var1!=="react")&& <p>내용2</p>}</div>
                <div>{(0)&& <p>내용2</p>}</div>
                <div>{var1 || <p>내용3</p>}</div> 	
                <div>{false || <p>내용4</p>}</div> 	
                {/* TODO: 삼항 연산자, &&, ||를 사용한 조건부 출력을 작성하세요. */}
            </div>
        </section>
    );
}