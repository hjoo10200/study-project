export default function Exam04InlineStyle() {
    // 변수 선언
    const mystyle = {backgroundColor:"greenyellow", color:"orange", fontSize:"24px"};
    // 반환값

    
    return (
        <section className="overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-100 shadow-sm">
            <header className="border-b border-zinc-700 bg-zinc-800 px-4 py-3">
                <h2 className="font-semibold">Exam04InlineStyle</h2>
            </header>
       <div className="space-y-2 p-4">
     <div style={mystyle}>
        인라인 스타일 적용
     </div>
     </div>
        </section>
    );
}