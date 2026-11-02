import Image from "next/image";
function fun(){
    return "함수 호출: { } 안에서 호출한 함수의 반환값을 출력합니다.";
}

export default function Exam02Expressions() {
    
    const name = "변수: { } 표현식으로 변수에 담긴 값을 출력합니다.";
    const imageFile = "photo1.jpg";
    const imageHeight = 130;
    
    return (
        <section className="overflow-hidden rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm">
            <header className="border-b border-gray-200 bg-gray-100 px-4 py-3">
                <h2 className="font-semibold">Exam02Expressions</h2>
            </header>
            <div className="space-y-2 p-4">
            <div>
                <p>
                    JSX 표현식: 하나의 값을 출력할 때는 {'{ }'}를 사용합니다.
                    변수, 연산식, 함수 호출, 컴포넌트나 JSX 태그를 넣을 수 있습니다.
                    if, for, while 같은 제어문은 직접 넣을 수 없습니다.
                </p>
                <p>{name}</p>
                <p style={{color:"orange"}}>{fun()}</p>
                <p>
                    
                    <Image src={"/images/"+imageFile} width="300" height="130" alt="이미지" loading="eager"/>
                    <Image src={`/images/${imageFile}`} width={200} height={imageHeight} alt="이미지" loading="lazy"/>
                    
                    </p>
            </div>
            </div>
        </section>
    );
}
