import Link from "next/link";

export default function AppMenu() {
    return (
        <aside className="w-56 shrink-0 border-r border-zinc-700 bg-zinc-800 p-4 text-zinc-100">
            <nav aria-label="메인 메뉴" className="space-y-2">
                <Link href="/" className="block rounded px-3 py-2 hover:bg-zinc-700">
                    홈
                </Link> 
                <details className="overflow-hidden rounded border border-zinc-700 bg-zinc-900">
                    <summary className="cursor-pointer bg-zinc-700 px-3 py-2 font-semibold hover:bg-zinc-600">
                        Ch2Component
                    </summary>
                    <div className="space-y-1 p-2">
                <Link href="/Ch2Component" className="block break-words rounded px-3 py-2 hover:bg-zinc-800">
                    ch02 component
                </Link>
                <Link href="/Ch2Component/Exam01WrapElement" className="block break-words rounded px-3 py-2 hover:bg-zinc-800">
                    Exam01WrapElement
                </Link>
                <Link href="/Ch2Component/Exam02Expressions" className="block break-words rounded px-3 py-2 hover:bg-zinc-800">
                    Exam02Expressions
                </Link>
                <Link href="/Ch2Component/Exam03Condition" className="block break-words rounded px-3 py-2 hover:bg-zinc-800">
                    Exam03Condition
                </Link>
                <Link href="/Ch2Component/Exam04InlineStyle" className="block break-words rounded px-3 py-2 hover:bg-zinc-800">
                    Exam04InlineStyle
                </Link>
                <Link href="/Ch2Component/Exam05ExternalCSS" className="block break-words rounded px-3 py-2 hover:bg-zinc-800">
                    Exam05ExternalCSS
                </Link>
                <Link href="/Ch2Component/Exam06Comment" className="block break-words rounded px-3 py-2 hover:bg-zinc-800">
                    Exam06Comment
                </Link>
                <Link href="/Ch2Component/Exam07EventHandling" className="block break-words rounded px-3 py-2 hover:bg-zinc-800">
                    Exam07EventHandling
                </Link>
                <Link href="/Ch2Component/Exam08Repeat" className="block break-words rounded px-3 py-2 hover:bg-zinc-800">
                    Exam08Repeat
                </Link>
                <Link href="/Ch2Component/Exam09Domref" className="block break-words rounded px-3 py-2 hover:bg-zinc-800">
                    Exam09Domref
                </Link>
                        <Link href="/Ch2Component/Exam10NestedLayout/pageComponentA" className="block break-words rounded px-3 py-2 hover:bg-zinc-800">
                            pageComponentA
                        </Link>
                        <Link href="/Ch2Component/Exam10NestedLayout/pageComponentB" className="block break-words rounded px-3 py-2 hover:bg-zinc-800">
                            pageComponentB
                        </Link>
                <Link href="/Ch2Component/Exam11RuntimeErrorHandling" className="block break-words rounded px-3 py-2 hover:bg-zinc-800">
                    Exam11RuntimeErrorHandling
                </Link>
                    </div>
                </details>
                <details className="overflow-hidden rounded border border-zinc-700 bg-zinc-900">
                    <summary className="cursor-pointer bg-zinc-700 px-3 py-2 font-semibold hover:bg-zinc-600">
                        Ch3PropsAndState
                    </summary>
                    <div className="space-y-1 p-2">
                <Link href="/Ch3PropsAndState" className="block break-words rounded px-3 py-2 hover:bg-zinc-800">
                    Ch3PropsAndState
                </Link>                      
                <Link href="/Ch3PropsAndState/Exam01Props" className="block break-words rounded px-3 py-2 hover:bg-zinc-800">
                    Exam01Props
                </Link>
                <Link href="/Ch3PropsAndState/Exam02PrimitiveTypeState" className="block break-words rounded px-3 py-2 hover:bg-zinc-800">
                    Exam02PrimitiveTypeState
                </Link>
                <Link href="/Ch3PropsAndState/Exam03ObjectTypeState" className="block break-words rounded px-3 py-2 hover:bg-zinc-800">
                    Exam03ObjectTypeState
                </Link>
                <Link href="/Ch3PropsAndState/Exam04FormState" className="block break-words rounded px-3 py-2 hover:bg-zinc-800">
                    Exam04FormState
                </Link>
                <Link href="/Ch3PropsAndState/Exam05StateToProp" className="block break-words rounded px-3 py-2 hover:bg-zinc-800">
                    Exam05StateToProp
                </Link>
                    </div>
                </details>
                <details className="overflow-hidden rounded border border-zinc-700 bg-zinc-900">
                    <summary className="cursor-pointer bg-zinc-700 px-3 py-2 font-semibold hover:bg-zinc-600">
                        Ch4LifeCycle
                    </summary>
                    <div className="space-y-1 p-2">
                        <Link href="/Ch4LifeCycle" className="block break-words rounded px-3 py-2 hover:bg-zinc-800">
                            Ch4LifeCycle
                        </Link>
                    </div>
                </details>
                <details className="overflow-hidden rounded border border-zinc-700 bg-zinc-900">
                    <summary className="cursor-pointer bg-zinc-700 px-3 py-2 font-semibold hover:bg-zinc-600">
                        ch5Rounting
                    </summary>
                    <div className="space-y-1 p-2">
                        <Link href="/ch5Rounting/exam01Navigation" className="block break-words rounded px-3 py-2 hover:bg-zinc-800">
                            exam01Navigation
                        </Link>
                        <Link href="/ch5Rounting/exam02QueryString" className="block break-words rounded px-3 py-2 hover:bg-zinc-800">
                            exam02QueryString
                        </Link>
                        <Link href="/ch5Rounting/exam02QueryString/componentA" className="block break-words rounded px-3 py-2 hover:bg-zinc-800">
                            componentA
                        </Link>
                    </div>
                </details>
                <details className="overflow-hidden rounded border border-zinc-700 bg-zinc-900">
                    <summary className="cursor-pointer bg-zinc-700 px-3 py-2 font-semibold hover:bg-zinc-600">
                        Ch7GlobalState
                    </summary>
                    <div className="space-y-1 p-2">
                        <Link href="/Ch7GlobalState/exam01ColorContext" className="block break-words rounded px-3 py-2 hover:bg-zinc-800">
                            exam01ColorContext
                        </Link>
                        <Link href="/Ch7GlobalState/Exam02AuthContext" className="block break-words rounded px-3 py-2 hover:bg-zinc-800">
                            Exam02AuthContext
                        </Link>
                    </div>
                </details>
                <details className="overflow-hidden rounded border border-zinc-700 bg-zinc-900">
                    <summary className="cursor-pointer bg-zinc-700 px-3 py-2 font-semibold hover:bg-zinc-600">
                        Ch8RestAPI
                    </summary>
                    <div className="space-y-1 p-2">
                        <Link href="/Ch8RestAPI/Exam01Review" className="block break-words rounded px-3 py-2 hover:bg-zinc-800">
                            Exam01Review
                        </Link>
                        <Link href="/Ch8RestAPI/Exam02MemberJoin" className="block break-words rounded px-3 py-2 hover:bg-zinc-800">
                            Exam02MemberJoin
                        </Link>
                        <Link href="/Ch8RestAPI/Exam03MemberLogin" className="block break-words rounded px-3 py-2 hover:bg-zinc-800">
                            Exam03MemberLogin
                        </Link>
                    </div>
                </details>
            </nav>
        </aside>
    );
}
