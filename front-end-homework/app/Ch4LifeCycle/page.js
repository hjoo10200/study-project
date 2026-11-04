// TODO: 필요한 클라이언트 지시문과 import를 직접 작성하세요.
"use client"
import { useEffect, useState } from "react";

export default function Ch4LifeCycle() {
  // TODO: 상태 두 개와 생명주기 Hook을 직접 선언하세요. 마운트·정리 함수와 의존성 배열의 차이를 비교하세요.
  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(101);
  useEffect(() => {
    console.log("마운트 상태")
    return () => {
      console.log("언마운트 상태");
    }
  }, []);

  useEffect(() => {
    console.log("마운트 상태/count1 때문에 업데이트 후 실행")
    return () => {
      console.log("언마운트 상태/count1 때문에 업데이트 전 실행")
    }
  }, [count1])

  return (
    <section className="mb-4 overflow-hidden rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm">
      <header className="border-b border-gray-200 bg-gray-100 px-4 py-3">
        <h2 className="font-semibold">Ch4LifeCycle</h2>
      </header>
      <div className="space-y-4 p-4">
        <div className="flex flex-wrap gap-4">
          {/* TODO: 아래 버튼에 첫 번째 상태를 증가시키는 클릭 이벤트를 직접 연결하세요. */}
          <button
            type="button"
            onClick={() => setCount1((prev) => prev + 1)}
            className="rounded bg-yellow-400 px-4 py-2 text-gray-900 hover:bg-yellow-300"
          >
            count1: {count1} {/* TODO: 첫 번째 상태 값을 출력하세요. */}
          </button>
          <button
            type="button"
            onClick={() => setCount2((prev) => prev + 1)}
            className="rounded bg-yellow-400 px-4 py-2 text-gray-900 hover:bg-yellow-300"
          >
            count1: {count2} {/* TODO: 첫 번째 상태 값을 출력하세요. */}
          </button>
          {/* TODO: 두 번째 버튼은 직접 작성하세요. */}
        </div>
        <details className="rounded border border-gray-200 p-3 text-sm">
          <summary className="cursor-pointer font-medium">실습 힌트</summary>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-gray-600">
            <li>서로 다른 두 숫자 상태를 만들고 각각 변경해보세요.</li>
            <li>처음 나타날 때 실행할 작업과 화면에서 사라질 때 실행할 정리 작업을 작성하세요.</li>
            <li>특정 상태만 감시하는 작업을 추가하고, 다른 상태를 바꿨을 때도 실행되는지 확인하세요.</li>
            <li>다른 메뉴로 이동하면서 정리 작업이 실행되는지 콘솔에서 확인하세요.</li>
          </ul>
        </details>
      </div>
    </section>
  );
}
