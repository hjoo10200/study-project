export default function Exam04InlineStyle() {
    // TODO: 필요한 변수, 함수 또는 스타일 객체를 직접 작성하세요.
    const mystyle ={
        backgroundColor:"skyblue",
        color:"white",
        fontsize:"24px"
    }
    return (
        <section className="mb-4 overflow-hidden rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm">
            <header className="border-b border-gray-200 bg-gray-100 px-4 py-3">
                <h2 className="font-semibold">Exam04InlineStyle</h2>
            </header>
            <div className="space-y-2 p-4">
                <div style={mystyle}>
                    인라인 스타일 적용화면
                </div>

                {/* TODO: 스타일 객체를 직접 선언하고 여기에 작성한 요소에 적용하세요. */}
            </div>
        </section>
    );
}