"use client"

export default function RepeattableRow() {
    const boards = [
        { bno: 1, btitle: "제목1", bwriter: "user1", bdate: "2026-11-03", bhitcount: 0 },
        { bno: 2, btitle: "제목2", bwriter: "user2", bdate: "2026-11-03", bhitcount: 0 },
        { bno: 3, btitle: "제목3", bwriter: "user3", bdate: "2026-11-03", bhitcount: 0 }
    ]


return (
    <section className="mb-4 overflow-hidden rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm">
        <header className="border-b border-gray-200 bg-gray-100 px-4 py-3">
            <h3 className="font-semibold">RepeattableRow</h3>
        </header>
        <div className="overflow-x-auto p-4">
            <table className="w-full min-w-[560px] border-collapse text-sm">
                <caption className="sr-only">게시글 목록</caption>
                <thead className="border-y border-gray-200 bg-gray-100 text-gray-700">
                    <tr>
                        <th scope="col" className="w-20 px-4 py-3 text-center font-semibold">번호</th>
                        <th scope="col" className="px-4 py-3 text-left font-semibold">제목</th>
                        <th scope="col" className="w-28 px-4 py-3 text-center font-semibold">작성자</th>
                        <th scope="col" className="w-36 px-4 py-3 text-center font-semibold">작성일</th>
                        <th scope="col" className="w-20 px-4 py-3 text-right font-semibold">조회수</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 border-b border-gray-200">
                    {boards.map((board) =>
                        <tr key={board.bno} className="hover:bg-gray-50">
                            <td className="px-4 py-3 text-center tabular-nums">{board.bno}</td>
                            <td className="px-4 py-3 text-left">{board.btitle}</td>
                            <td className="px-4 py-3 text-center">{board.bwriter}</td>
                            <td className="whitespace-nowrap px-4 py-3 text-center tabular-nums">{board.bdate}</td>
                            <td className="px-4 py-3 text-right tabular-nums">{board.bhitcount}</td>
                        </tr>
                    )}
                </tbody>
            </table>


            {/* TODO: 표를 직접 만들고 map으로 게시글의 각 필드를 출력하세요. 고유한 key도 지정하세요. */}
        </div>
    </section>
);
}