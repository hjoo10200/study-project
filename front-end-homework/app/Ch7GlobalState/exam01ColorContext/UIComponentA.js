// TODO: 필요한 클라이언트 지시문과 import를 직접 작성하세요.
"use client"
import { ColorContext } from "@/Contexts/ColorContext";
import { useContext } from "react";

export default function UIComponentA() {
  // TODO: 색상 컨텍스트를 읽는 코드를 직접 작성하세요.
  const colorContext = useContext(ColorContext);

  const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

  const handleClick = (color) => {
    colorContext.setColor(color);
  }
  return (
    <section className="mb-4 overflow-hidden rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm">
      <header className="border-b border-gray-200 bg-gray-100 px-4 py-3">
        <h3 className="font-semibold">UIComponentA</h3>
      </header>
      <div className="flex items-center gap-2 p-4 ">
        {colors.map((color, index) => (
          <div onClick={() => handleClick(color)} key={index} className="box-border h-6 w-6 shrink-0 cursor-pointer border-2 border-zinc-400" style={{ background: color }}>
          </div>))}
        {/* TODO: 색상 목록과 선택 UI, 공유 색상을 변경하는 이벤트를 직접 작성하세요. */}
      </div>
      <hr />
      <p>color:{colorContext.color}</p>
    </section>
  );
}
