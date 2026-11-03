"use client";

// TODO: 이벤트를 연결하기 전에 파일 첫 줄에 use client 지시문을 작성하세요.
export default function Exam07EventHandling() {
    // TODO: 필요한 변수, 함수 또는 스타일 객체를 직접 작성하세요.
function handleClick1(){
    console.log("버튼1을 클릭함")
}
function handleClick3(name){
    console.log(name+"을 클릭함")
}

    return (
        <section className="mb-4 overflow-hidden rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm">
            <header className="border-b border-gray-200 bg-gray-100 px-4 py-3">
                <h2 className="font-semibold">Exam07EventHandling</h2>
            </header>
            <div className="flex flex-wrap gap-3 p-4">
                <button
                type ="botton"
                onClick={handleClick1}
                className="rounded bg-yellow-400 px-4 py-2 text-black hover:bg-yellow-300"
                >
                버튼1   
                </button>
                {/* TODO: 버튼과 이벤트 함수를 작성하세요. 자식 버튼을 별도 컴포넌트로 분리하고 부모의 함수를 연결하세요. */}

            
                <button
                type ="botton"
                onClick={() => {console.log("버튼2를 클릭")}}
                className="rounded bg-green-400 px-4 py-2 text-black hover:bg-green-300"
                >
                버튼2
                </button>

            
                <button
                type ="botton"
                onClick={() => {handleClick3("버튼3")}}
                className="rounded bg-red-400 px-4 py-2 text-black hover:bg-red-300"
                >
                버튼3
                </button>    
                {/* TODO: 버튼과 이벤트 함수를 작성하세요. 자식 버튼을 별도 컴포넌트로 분리하고 부모의 함수를 연결하세요. */}
            </div>
        </section>
    );
}