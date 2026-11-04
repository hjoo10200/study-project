// TODO: 필요한 클라이언트 지시문과 import를 직접 작성하세요.

import UIComponentA from "./UIComponentA";
import UIComponentB from "./UIComponentB";

export default function Exam01ColorContext() {
  // TODO: 직접 만든 색상 공유 컴포넌트들을 import하고 아래 본문에 배치하세요.

  return (
    <section className="mb-4 overflow-hidden rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm">
      <header className="border-b border-gray-200 bg-gray-100 px-4 py-3">
        <h2 className="font-semibold">Exam01ColorContext</h2>
      </header>
      <div className="space-y-4 p-4">
       <UIComponentA></UIComponentA>
       <UIComponentB></UIComponentB>
        {/* TODO: 색을 선택하는 컴포넌트와 선택한 색을 표시하는 컴포넌트를 직접 만들고 연결하세요. */}
        <details className="rounded border border-gray-200 p-3 text-sm">
          <summary className="cursor-pointer font-medium">실습 힌트</summary>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-gray-600">
            <li>app 밖에 색상 상태와 변경 함수를 공유할 모듈을 직접 만드세요. 파일 이름과 위치도 직접 정하세요.</li>
            <li>공유 값을 만드는 Provider가 children을 감싸도록 하고, 두 소비 컴포넌트의 공통 상위에 연결하세요.</li>
            <li>선택 역할과 표시 역할을 별도 컴포넌트로 나누고, 각각 컨텍스트를 읽도록 작성하세요.</li>
            <li>한쪽에서 선택한 색이 props 전달 없이 다른 쪽에도 반영되는지 확인하세요.</li>
          </ul>
        </details>
      </div>
    </section>
  );
}
