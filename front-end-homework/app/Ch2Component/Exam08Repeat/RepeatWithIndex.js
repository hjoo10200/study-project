
export default function RepeatWithIndex() {
    const fruits = ['grape', 'apple', 'banana']
    // TODO: 과일 문자열 배열을 직접 선언하세요.

    return (
        <section className="mb-4 overflow-hidden rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm">
            <header className="border-b border-gray-200 bg-gray-100 px-4 py-3">
                <h3 className="font-semibold">RepeatWithIndex</h3>
            </header>
            <div className="overflow-x-auto p-4">
                <table className="w-full border-collapse text-sm">
                    <caption className="sr-only">과일 목록</caption>
                    <thead className="border-y border-gray-200 bg-gray-100 text-gray-700">
                        <tr>
                            <th scope="col" className="w-20 px-4 py-3 text-center font-semibold">번호</th>
                            <th scope="col" className="px-4 py-3 text-left font-semibold">과일</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 border-b border-gray-200">
                        {fruits.map((item, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="px-4 py-3 text-center tabular-nums">{index}</td>
                                <td className="px-4 py-3 text-left">{item}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {/* TODO: 표를 직접 만들고 map의 인덱스로 1부터 시작하는 번호와 과일 이름을 출력하세요. */}
            </div>
        </section>
    );
}