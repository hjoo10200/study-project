

export default function RepeatWithIndex() {
    const fruits = ["Grape","mandarin","melon"]
    return (
        <section className="mb-4 overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-100 shadow-sm">
            <header className="border-b border-zinc-700 bg-zinc-800 px-4 py-3">
                <h2 className="font-semibold">RepeatWithIndex</h2>
            </header>
            <div className="p-4">

                <table className="w-full border-collapse text-sm">
                    <caption className="sr-only">과일 목록</caption>
                    <thead className="border-y border-zinc-700 bg-zinc-800 text-zinc-300">
                        <tr>
                            <th scope="col" className="w-20 px-4 py-3 text-center font-semibold">번호</th>
                            <th scope="col" className="px-4 py-3 text-left font-semibold">과일</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800 border-b border-zinc-700">
                        {fruits.map((item, index) => (
                            <tr key={index} className="transition-colors hover:bg-zinc-800">
                                <td className="px-4 py-3 text-center tabular-nums text-zinc-400">{index + 1}</td>
                                <td className="px-4 py-3 font-medium">{item}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </section>
    );
}
