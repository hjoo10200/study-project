// TODO: 필요한 클라이언트 지시문과 import를 직접 작성하세요.
"use client"
import { useRouter } from "next/navigation";

export default function Exam01Navigation() {
  // TODO: 클라이언트 지시문, 라우터 Hook과 이동 이벤트 함수를 직접 작성하세요.
  const router = useRouter();
  const handleClick = () => {
    router.push("/Ch2Component")
  }

  return (
    <section className="mb-4 overflow-hidden rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm">
      <header className="border-b border-gray-200 bg-gray-100 px-4 py-3">
        <h2 className="font-semibold">Exam01Navigation</h2>
      </header>
      <div className="space-y-4 p-4">
        {/* TODO: 아래 버튼에 이동 함수를 연결하세요. */}
        <button
          type="button"
          onClick={handleClick}
          className="rounded bg-yellow-400 px-3 py-1 text-sm text-gray-900 hover:bg-yellow-300"
        >
          이동
        </button>
        <details className="rounded border border-gray-200 p-3 text-sm">
          <summary className="cursor-pointer font-medium">실습 힌트</summary>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-gray-600">
            <li>클릭 이벤트에서 라우터로 기존 실습 페이지로 이동해보세요.</li>
            <li>직접 작성한 링크로 이동하는 방법과 코드에서 이동시키는 방법을 비교하세요.</li>
            <li>뒤로 가기 기록을 남기는 이동과 현재 기록을 바꾸는 이동의 차이를 확인하세요.</li>
          </ul>
        </details>
      </div>
    </section>
  );
}
