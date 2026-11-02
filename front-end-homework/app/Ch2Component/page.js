export default function Ch2Component() {
  return (
    <div className="p-4 text-gray-900">
      <section className="mb-4 border border-gray-300 bg-white">
        <header className="border-b border-gray-300 bg-gray-100 px-4 py-3">
          <h1 className="font-semibold">Ch2Component 실습</h1>
        </header>
        <div className="space-y-2 p-4">
          <p>front-end의 ch2 예제와 같은 Tailwind 기본 틀에서 연습합니다.</p>
          <p>각 예제의 page.js에는 제목줄과 빈 본문만 준비되어 있습니다. 자식 컴포넌트와 CSS 파일은 직접 만듭니다.</p>
          <p>기본 틀 확인 → 힌트로 구조 생각하기 → 폴더·파일 만들기 → 실습 → 확인</p>
          <nav aria-label="실습 목록" className="flex flex-wrap gap-3 pt-2 text-sm">
            <a className="text-blue-700 underline" href="#exam01">1. 컴포넌트</a>
            <a className="text-blue-700 underline" href="#exam02">2. 표현식</a>
            <a className="text-blue-700 underline" href="#exam03">3. 조건</a>
            <a className="text-blue-700 underline" href="#exam04">4. 인라인 스타일</a>
            <a className="text-blue-700 underline" href="#exam05">5. CSS 모듈</a>
            <a className="text-blue-700 underline" href="#exam06">6. 주석</a>
            <a className="text-blue-700 underline" href="#exam07">7. 이벤트</a>
          </nav>
        </div>
      </section>

      <section className="mb-4 border border-gray-300 bg-white">
        <header className="border-b border-gray-300 bg-gray-100 px-4 py-3">
          <h2 className="font-semibold">page.js 기본 틀</h2>
        </header>
        <div className="space-y-2 p-4">
          <p>각 예제의 page.js에는 원본과 같은 간단한 Tailwind 틀이 준비되어 있습니다.</p>
          <p>빈 본문 안에 실습할 내용만 작성하세요. 변수와 함수, import도 직접 작성합니다.</p>
          <details>
            <summary className="cursor-pointer text-blue-700">기본 틀 참고하기</summary>
            <pre className="mt-2 overflow-x-auto border border-gray-200 bg-gray-50 p-3 text-xs leading-6">{`export default function Exam01WrapElement() {
  return (
    <section className="mb-4 overflow-hidden rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm">
      <header className="border-b border-gray-200 bg-gray-100 px-4 py-3">
        <h2 className="font-semibold">Exam01WrapElement</h2>
      </header>
      <div className="space-y-2 p-4">
        {/* 실습할 부분을 직접 작성 */}
      </div>
    </section>
  );
}`}</pre>
          </details>
          <p className="text-sm text-gray-600">제목줄과 본문의 Tailwind 틀만 제공하며 실습 정답은 비워두었습니다.</p>
        </div>
      </section>

      <section id="exam01" className="mb-4 border border-gray-300 bg-white">
        <header className="border-b border-gray-300 bg-gray-100 px-4 py-3">
          <h2 className="font-semibold">1. Exam01WrapElement — 컴포넌트</h2>
        </header>
        <div className="space-y-3 p-4">
          <p>구조 힌트: 자식 컴포넌트 두 개가 필요합니다. 하나는 파일 하나로, 다른 하나는 자기 폴더로 정리해보세요. 이름과 위치는 직접 정하세요.</p>
          <ol className="list-decimal space-y-1 pl-5">
            <li>준비된 page.js의 빈 본문을 확인하세요.</li>
            <li>각 자식 파일에 함수형 컴포넌트를 만들고 제목과 본문을 반환하세요.</li>
            <li>부모에서 두 자식을 import하고 JSX에 배치하세요.</li>
            <li>여러 요소를 반환할 때 하나의 상위 요소로 묶어보세요.</li>
          </ol>
          <p>확인: 두 자식의 내용이 모두 보이면 됩니다.</p>
          <p className="text-sm">실습 주소: <a className="break-all text-blue-700 underline" href="/Ch2Component/Exam01WrapElement">실습 화면 열기</a></p>
        </div>
      </section>

      <section id="exam02" className="mb-4 border border-gray-300 bg-white">
        <header className="border-b border-gray-300 bg-gray-100 px-4 py-3">
          <h2 className="font-semibold">2. Exam02Expressions — JSX 표현식</h2>
        </header>
        <div className="space-y-3 p-4">
          <ol className="list-decimal space-y-1 pl-5">
            <li>준비된 page.js의 빈 본문에서 실습하세요.</li>
            <li>문자열 변수, 숫자 변수와 문자열을 반환하는 함수를 선언하세요.</li>
            <li>변수, 연산 결과와 함수의 반환값을 JSX 표현식으로 출력하세요.</li>
            <li>title 같은 JSX 속성에도 변수를 넣어보세요.</li>
          </ol>
          <p>확인: 변수 값을 바꾸면 출력 내용도 바뀌어야 합니다.</p>
          <p className="text-sm">실습 주소: <a className="break-all text-blue-700 underline" href="/Ch2Component/Exam02Expressions">실습 화면 열기</a></p>
        </div>
      </section>

      <section id="exam03" className="mb-4 border border-gray-300 bg-white">
        <header className="border-b border-gray-300 bg-gray-100 px-4 py-3">
          <h2 className="font-semibold">3. Exam03Condition — 조건부 렌더링</h2>
        </header>
        <div className="space-y-3 p-4">
          <ol className="list-decimal space-y-1 pl-5">
            <li>준비된 page.js의 빈 본문에서 실습하세요.</li>
            <li>조건을 비교할 변수를 선언하세요.</li>
            <li>삼항 연산자로 서로 다른 문장을 표시하세요.</li>
            <li>&amp;&amp;와 ||를 사용한 조건부 출력도 각각 작성하세요.</li>
          </ol>
          <p>확인: 조건을 참과 거짓으로 바꾸어 어떤 내용이 나오는지 확인하세요.</p>
          <p className="text-sm">실습 주소: <a className="break-all text-blue-700 underline" href="/Ch2Component/Exam03Condition">실습 화면 열기</a></p>
        </div>
      </section>

      <section id="exam04" className="mb-4 border border-gray-300 bg-white">
        <header className="border-b border-gray-300 bg-gray-100 px-4 py-3">
          <h2 className="font-semibold">4. Exam04InlineStyle — 인라인 스타일</h2>
        </header>
        <div className="space-y-3 p-4">
          <ol className="list-decimal space-y-1 pl-5">
            <li>준비된 page.js의 빈 본문에서 실습하세요.</li>
            <li>배경색, 글자색과 글자 크기를 지정하는 스타일 객체를 만드세요.</li>
            <li>본문의 div에 style 속성으로 연결하세요.</li>
          </ol>
          <p>확인: 스타일 객체를 바꾸면 div의 모양이 바뀌어야 합니다.</p>
          <p className="text-sm">실습 주소: <a className="break-all text-blue-700 underline" href="/Ch2Component/Exam04InlineStyle">실습 화면 열기</a></p>
        </div>
      </section>

      <section id="exam05" className="mb-4 border border-gray-300 bg-white">
        <header className="border-b border-gray-300 bg-gray-100 px-4 py-3">
          <h2 className="font-semibold">5. Exam05ExternalCSS — CSS 모듈</h2>
        </header>
        <div className="space-y-3 p-4">
          <ol className="list-decimal space-y-1 pl-5">
            <li>구조 힌트: 부모와 자식이 각자 스타일을 가져야 합니다. 컴포넌트와 스타일을 묶어 관리할 방법을 생각해보세요.</li>
            <li>부모와 자식 컴포넌트에 간단한 div를 작성하세요.</li>
            <li>두 CSS 파일에 같은 이름의 클래스를 만들되 색상은 다르게 작성하세요.</li>
            <li>각 컴포넌트에서 자신의 CSS 모듈을 import하고 className에 연결하세요.</li>
            <li>부모에서 자식 컴포넌트를 불러와 배치하세요.</li>
          </ol>
          <p>확인: 같은 클래스 이름이어도 부모와 자식에 서로 다른 색이 적용되어야 합니다.</p>
          <p className="text-sm">실습 주소: <a className="break-all text-blue-700 underline" href="/Ch2Component/Exam05ExternalCSS">실습 화면 열기</a></p>
        </div>
      </section>

      <section id="exam06" className="mb-4 border border-gray-300 bg-white">
        <header className="border-b border-gray-300 bg-gray-100 px-4 py-3">
          <h2 className="font-semibold">6. Exam06Comment — 주석</h2>
        </header>
        <div className="space-y-3 p-4">
          <ol className="list-decimal space-y-1 pl-5">
            <li>준비된 page.js의 빈 본문에서 실습하세요.</li>
            <li>JavaScript 영역과 JSX 영역에 설명 주석을 각각 작성하세요.</li>
            <li>p 태그를 두 개 작성한 뒤 하나만 주석 처리해 숨겨보세요.</li>
          </ol>
          <p>확인: 설명 주석과 주석 처리한 요소가 화면에 표시되지 않아야 합니다.</p>
          <p className="text-sm">실습 주소: <a className="break-all text-blue-700 underline" href="/Ch2Component/Exam06Comment">실습 화면 열기</a></p>
        </div>
      </section>

      <section id="exam07" className="mb-4 border border-gray-300 bg-white">
        <header className="border-b border-gray-300 bg-gray-100 px-4 py-3">
          <h2 className="font-semibold">7. Exam07EventHandling — 이벤트</h2>
        </header>
        <div className="space-y-3 p-4">
          <ol className="list-decimal space-y-1 pl-5">
            <li>구조 힌트: 자식 버튼을 별도 컴포넌트로 분리하세요. 이름과 저장 위치는 직접 정하세요. 이벤트를 작성할 페이지에는 use client 지시문이 필요합니다.</li>
            <li>부모 화면에 버튼 3개를 직접 작성하세요.</li>
            <li>함수 참조, 인라인 함수와 인자 전달 방식으로 클릭 이벤트를 연결하세요.</li>
            <li>자식 컴포넌트에 버튼을 만들고 부모에서 전달한 함수를 클릭 시 실행하세요.</li>
          </ol>
          <p>확인: 클릭할 때만 브라우저 콘솔에 메시지가 출력되어야 합니다.</p>
          <p className="text-sm">실습 주소: <a className="break-all text-blue-700 underline" href="/Ch2Component/Exam07EventHandling">실습 화면 열기</a></p>
        </div>
      </section>
      <p className="text-sm text-gray-600">파일 이름과 저장 위치, import 경로는 직접 정하세요. 폴더 트리나 완성된 경로는 제공하지 않습니다.</p>
    </div>
  );
}