"use client";

import ChildComponent from "../Exam05ExternalCSS/ChildComponent";


export default function Exam07EventHandling() {

    function handleClick1() {
    console.log("버튼1을 클릭함")
    }

    function handleClick3(name){
        console.log(name+ "을 클릭함")
    }

    
    function handleClick4(name){
        console.log("버튼4을 클릭함")
    }

    return (
        <section className="overflow-hidden rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm">
            <header className="border-b border-gray-200 bg-gray-100 px-4 py-3">
                <h2 className="font-semibold">Exam07EventHandling</h2>
            </header>
            <div className="flex flex-wrap gap-3 p-4">
                <button
                    type="button"
                    onClick={handleClick1}
                    className="rounded bg-yellow-400 px-4 py-2 text-black hover:bg-yellow-300"
                >
                    버튼1
                </button>
                <button
                    type="button"
                    onClick={() => {console.log("버튼2를 클릭함")}}
                    className="rounded bg-yellow-400 px-4 py-2 text-black hover:bg-yellow-300"
                >
                    버튼2
                </button>

                <button
                    type="button"
                    onClick={() => handleClick3("버튼3")}
                    className="rounded bg-yellow-400 px-4 py-2 text-black hover:bg-yellow-300"
                >
                    버튼3
                </button>    

              

                <hr/>

                <div onClick={() => handleClick3("컨테이너")}>
                    컨테이너
                </div>     

                <hr/> 
                
                <ChildComponent onclick={() => console.log("컴포넌트 클릭 이벤트 처리")}/>
            </div>
        </section>
    );
}
