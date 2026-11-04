// TODO: 필요한 클라이언트 지시문과 import를 직접 작성하세요.
"use client"

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function ComponentA() {
  return (
    <Suspense fallback={<p className="p-4">로딩 중...</p>}>
      <ComponentAContent/>
    </Suspense>

  );

function ComponentAContent(){

  const querystring = useSearchParams();

  const key1 = querystring.get("key1");
  const key2 = querystring.get("key2");
  // TODO: 전달받은 쿼리 문자열에서 두 값을 읽는 코드를 직접 작성하세요.
  // TODO: 검색 매개변수 Hook을 사용한다면 로딩 경계와 내부 컴포넌트 구성도 직접 작성하세요.

  return (
    <section className="mb-4 overflow-hidden rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm">
      <header className="border-b border-gray-200 bg-gray-100 px-4 py-3">
        <h2 className="font-semibold">ComponentA</h2>
      </header>
      <div className="space-y-2 p-4">
        <p>key1: {key1}</p>
        <p>key2: {key2}</p>
        {/* TODO: 전달받은 두 쿼리 값을 직접 출력하세요. */}
      </div>
    </section>
  );
};
}