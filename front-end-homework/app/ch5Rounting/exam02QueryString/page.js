// TODO: 필요한 클라이언트 지시문과 import를 직접 작성하세요.
"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Exam02QueryString() {
  // TODO: 전달할 두 값의 상태, 라우터와 쿼리 문자열을 포함하는 이동 함수를 직접 작성하세요.
  const router = useRouter();
  const [key1,setKey1] = useState("value1");
  const [key2,setKey2] = useState("value2");

  const handleClick = () =>{
    router.push(`exam02QueryString/componentA?key1=${key1}&key2=${key2}`)
  };


  return (
    <section className="mb-4 overflow-hidden rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm">
      <header className="border-b border-gray-200 bg-gray-100 px-4 py-3">
        <h2 className="font-semibold">Exam02QueryString</h2>
      </header>
      <div className="space-y-4 p-4">
        
        <Link href={`/ch5Rounting/exam02QueryString/componentA?key1=${key1}&key2=${key2}`} className="inline-flex items-center rounded bg-yellow-400 px-3 py-1 text-sm text-zinc-900 hover:bg-yellow-300">componentA</Link>
        <Link href={`exam02QueryString/componentA?key1=${key1}&key2=${key2}`} className="inline-flex items-center rounded bg-yellow-400 px-3 py-1 text-sm text-zinc-900 hover:bg-yellow-300">componentA</Link>
        {/* TODO: 쿼리를 전달하는 링크와 이동 버튼을 직접 작성하세요. */}
        <button onClick={handleClick} type="button" className="rounded bg-yellow-400 px-3 py-1 text-sm text-zinc-900 hover:bg-yellow-300">

        이동
        </button>
        <details className="rounded border border-gray-200 p-3 text-sm">
          <summary className="cursor-pointer font-medium">실습 힌트</summary>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-gray-600">
            <li>주소 뒤에 이름과 값의 쌍을 두 개 붙여 전달해보세요.</li>
            <li>받는 역할의 하위 페이지는 직접 만들고, 전달한 두 값을 읽어서 출력하세요.</li>
            <li>절대 경로와 상대 경로가 각각 어떤 주소로 이동하는지 비교하세요.</li>
            <li>검색 매개변수를 읽는 Hook을 사용할 때는 해당 컴포넌트를 감싸는 로딩 경계도 생각해보세요.</li>
          </ul>
        </details>
      </div>
    </section>
  );
}
