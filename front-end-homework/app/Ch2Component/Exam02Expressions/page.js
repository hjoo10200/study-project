import Image from "next/image";
function fun(){
    return "함수 호출함"
}

export default function Exam02Expressions() {
const name="나의 투쟁";
const imagefile="photo10.jpg";
const imageHeight= 130;

    return (
        <section className="mb-4 overflow-hidden rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm">
            <header className="border-b border-gray-200 bg-gray-100 px-4 py-3">
                <h2 className="font-semibold">Exam02Expressions</h2>
            </header>
            <div className="space-y-2 p-4">
                <p>{name}</p>
                <p style={{color:"red"}}>{fun()}</p>

                <p>
                    <Image src={"/images/"+imagefile} width="300" height={imageHeight} loading="eager"/>
                    <Image src={`/images/${imagefile}`} width={200} height={imageHeight} alt="이미지" loading="lazy"/>
                </p>
                {/* TODO: 변수, 연산 결과와 함수 반환값을 JSX 표현식으로 출력하세요. */}
            </div>
        </section>
    );
}