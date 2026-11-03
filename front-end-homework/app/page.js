import Link from "next/link";

export default function Home() {
  return (
    <section className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
      <header className="border-b border-gray-200 bg-gray-100 px-4 py-3">
        <h1 className="font-semibold">Home</h1>
      </header>
      <div className="space-y-4 p-4">
        <h2 className="text-lg font-semibold">프론트엔드 복습</h2>
        <p>왼쪽 메뉴에서 예제를 선택해 실습하세요.</p>
        <p className="text-sm text-gray-600">
          Tailwind 기본 틀 안에서 함수, 표, 입력창, 버튼 등 주요 코드를 직접 작성합니다.
          실습 안내에서는 예제별 목표와 힌트를 확인할 수 있습니다.
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          <Link href="/Ch2Component" prefetch={false} className="text-blue-700 underline">
            Ch2 컴포넌트 실습 안내
          </Link>
          <Link href="/Ch3PropsAndState" prefetch={false} className="text-blue-700 underline">
            Ch3 props·state 실습 안내
          </Link>
        </div>
      </div>
    </section>
  );
}
