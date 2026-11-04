// TODO: 필요한 클라이언트 지시문과 import를 직접 작성하세요.
"use client"

import { ColorContext } from "@/Contexts/ColorContext";
import { useContext } from "react";

export default function UIComponentB() {
  // TODO: 색상 컨텍스트를 읽는 코드를 직접 작성하세요.
  const colorContext = useContext(ColorContext);
  return (
    <section className="mb-4 overflow-hidden rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm">
      <header className="border-b border-gray-200 bg-gray-100 px-4 py-3">
        <h3 className="font-semibold">UIComponentB</h3>
      </header>
      <div className="space-y-2 p-4">
        {/* TODO: 경고창에 공유 색상 값의 출력과 배경색 적용을 직접 연결하세요. */}
        <div role="alert" className="rounded border px-4 py-3 text-white" style={{ backgroundColor: colorContext.color }}>
          <strong className="font-semibold">{colorContext.color}</strong>
          <p className="mt-1 text-sm">색을 확인해 주세요.</p>
        </div>
      </div>
    </section>
  );
}
