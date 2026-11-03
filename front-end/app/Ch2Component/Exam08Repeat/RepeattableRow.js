"use client"


export default function RepeattableRow() {


    const boards = [
    {bno:1, btitle:"제목1", bwriter:"user1", bdate:"2026-11-03", bhitcount:0},
    {bno:2, btitle:"제목2", bwriter:"user2", bdate:"2026-11-03", bhitcount:0},
    {bno:3, btitle:"제목3", bwriter:"user3", bdate:"2026-11-03", bhitcount:0}
  ];

    return (
        <section className="mb-4 overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-100 shadow-sm">
            <header className="border-b border-zinc-700 bg-zinc-800 px-4 py-3">
                <h2 className="font-semibold">RepeattableRow</h2>
            </header>
            <div className="overflow-x-auto p-4">
            <table className="w-full min-w-[560px] border-collapse text-sm">
              <caption className="sr-only">게시글 목록</caption>
          <thead className="border-y border-zinc-700 bg-zinc-800 text-zinc-300">
            <tr>
              <th scope="col" className="w-20 px-4 py-3 text-center font-semibold">번호</th>
              <th scope="col" className="px-4 py-3 text-left font-semibold">제목</th>
              <th scope="col" className="w-28 px-4 py-3 text-center font-semibold">작성자</th>
              <th scope="col" className="w-36 px-4 py-3 text-center font-semibold">작성일</th>
              <th scope="col" className="w-20 px-4 py-3 text-right font-semibold">조회수</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800 border-b border-zinc-700">
            {boards.map((board)=> // 배열의 각 항목을 행으로 출력
                    <tr key={board.bno} className="transition-colors hover:bg-zinc-800">
                        <td className="px-4 py-3 text-center tabular-nums text-zinc-400">{board.bno}</td>
                        <td className="px-4 py-3 font-medium">{board.btitle}</td>
                        <td className="px-4 py-3 text-center text-zinc-300">{board.bwriter}</td>
                        <td className="whitespace-nowrap px-4 py-3 text-center tabular-nums text-zinc-400">{board.bdate}</td>
                        <td className="px-4 py-3 text-right tabular-nums text-zinc-400">{board.bhitcount}</td>
                    </tr>
                )}
          </tbody>
          </table>
            </div>
        </section>
    );
}
