import Image from "next/image";


export default function Exam02Expressions() {
    // 변수 선언
    const var1 = "리액트"
    // 반환값

    
    return (
        <section className="overflow-hidden rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm">
            <header className="border-b border-gray-200 bg-gray-100 px-4 py-3">
                <h2 className="font-semibold">Exam03Condition</h2>
            </header>
       <div className="space-y-2 p-4">
     <div>
        <div>
            {/* JSX 안에서는 if문 대신 삼항 연산자로 조건에 따라 표시할 JSX를 선택합니다. */}
            <div>{(var1 === "리액트")? <p>삼항 연산자: 조건이 참일 때 표시합니다.</p>: <p>삼항 연산자: 조건이 거짓일 때 표시합니다.</p>}</div> 
            {/* &&는 조건이 참일 때, ||는 조건이 거짓일 때 오른쪽 JSX를 반환합니다. */}
            <div>{(var1 === "리액트")&& <p>&& 연산자: 조건이 참이므로 표시합니다.</p> }</div> {/* JSX 반환 */}
            <div>{(var1 !== "리액트")&& <p>&& 연산자: 조건이 참이면 표시합니다.</p> }</div> {/* false 반환: 화면에 표시하지 않음 */}
            <div>{(var1 === "리액트")|| <p>|| 연산자: 조건이 거짓이면 표시합니다.</p> }</div> {/* true 반환: 화면에 표시하지 않음 */}
            <div>{(var1 !== "리액트")|| <p>|| 연산자: 조건이 거짓이므로 표시합니다.</p> }</div> {/* JSX 반환 */}
        </div>
     </div>
     </div>
        </section>
    );
}
