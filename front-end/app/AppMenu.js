import Link from "next/link";

export default function AppMenu() {
    return (
        <aside className="w-56 shrink-0 border-r border-gray-200 bg-gray-100 p-4 text-gray-900">
            <nav aria-label="메인 메뉴" className="space-y-2">
                <Link href="/" className="block rounded px-3 py-2 hover:bg-gray-200">
                    홈
                </Link> 
                <details className="overflow-hidden rounded border border-gray-200 bg-white">
                    <summary className="cursor-pointer bg-gray-200 px-3 py-2 font-semibold hover:bg-gray-300">
                        Ch2Component
                    </summary>
                    <div className="space-y-1 p-2">
                <Link href="/Ch2Component" className="block break-words rounded px-3 py-2 hover:bg-gray-100">
                    ch02 component
                </Link>
                <Link href="/Ch2Component/Exam01WrapElement" className="block break-words rounded px-3 py-2 hover:bg-gray-100">
                    Exam01WrapElement
                </Link>
                <Link href="/Ch2Component/Exam02Expressions" className="block break-words rounded px-3 py-2 hover:bg-gray-100">
                    Exam02Expressions
                </Link>
                <Link href="/Ch2Component/Exam03Condition" className="block break-words rounded px-3 py-2 hover:bg-gray-100">
                    Exam03Condition
                </Link>
                <Link href="/Ch2Component/Exam04InlineStyle" className="block break-words rounded px-3 py-2 hover:bg-gray-100">
                    Exam04InlineStyle
                </Link>
                <Link href="/Ch2Component/Exam05ExternalCSS" className="block break-words rounded px-3 py-2 hover:bg-gray-100">
                    Exam05ExternalCSS
                </Link>
                <Link href="/Ch2Component/Exam06Comment" className="block break-words rounded px-3 py-2 hover:bg-gray-100">
                    Exam06Comment
                </Link>
                <Link href="/Ch2Component/Exam07EventHandling" className="block break-words rounded px-3 py-2 hover:bg-gray-100">
                    Exam07EventHandling
                </Link>

                    </div>
                </details>
                <details className="overflow-hidden rounded border border-gray-200 bg-white">
                    <summary className="cursor-pointer bg-gray-200 px-3 py-2 font-semibold hover:bg-gray-300">
                        Ch3PropsAndState
                    </summary>
                    <div className="space-y-1 p-2">
                <Link href="/Ch3PropsAndState" className="block break-words rounded px-3 py-2 hover:bg-gray-100">
                    Ch3PropsAndState
                </Link>                      
                <Link href="/Ch3PropsAndState/Exam01Props" className="block break-words rounded px-3 py-2 hover:bg-gray-100">
                    Exam01Props
                </Link>                                                      
                    </div>
                </details>
            </nav>
        </aside>
    );
}
