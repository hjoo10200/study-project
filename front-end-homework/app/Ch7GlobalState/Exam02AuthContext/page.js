// TODO: 필요한 클라이언트 지시문과 import를 직접 작성하세요.

export default function Exam02AuthContext() {
  // TODO: 인증 컨텍스트 사용, 로그인 여부에 따른 출력과 로그아웃 처리를 직접 작성하세요.

  return (
    <section className="mb-4 overflow-hidden rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm">
      <header className="border-b border-gray-200 bg-gray-100 px-4 py-3">
        <h2 className="font-semibold">Exam02AuthContext</h2>
      </header>
      <div className="space-y-4 p-4">
        {/* 기본 폼 틀: 직접 만드는 로그인 페이지나 보조 컴포넌트로 옮겨 사용하세요. */}
        <div className="max-w-sm space-y-3">
          <label className="block text-sm font-medium">
            아이디
            {/* TODO: 상태 값과 입력 변경 이벤트를 연결하세요. */}
            <input type="text" name="memberId" autoComplete="username" required
              className="mt-1 block w-full rounded border border-gray-300 px-3 py-2 focus:outline-2 focus:outline-yellow-500" />
          </label>
          <label className="block text-sm font-medium">
            비밀번호
            {/* TODO: 상태 값과 입력 변경 이벤트를 연결하세요. */}
            <input type="password" name="password" autoComplete="current-password" required
              className="mt-1 block w-full rounded border border-gray-300 px-3 py-2 focus:outline-2 focus:outline-yellow-500" />
          </label>
          {/* TODO: 각 버튼의 이벤트를 연결하세요. */}
          <div className="flex gap-2">
            <button type="button" className="rounded border border-gray-300 px-3 py-2 text-sm hover:bg-gray-100">취소</button>
            <button type="button" className="rounded bg-yellow-400 px-3 py-2 text-sm text-gray-900 hover:bg-yellow-300">로그인</button>
          </div>
        </div>
        {/* TODO: 로그인 여부에 따른 화면 전환, 로그인 화면 이동과 로그아웃 버튼을 작성하세요. */}
        <details className="rounded border border-gray-200 p-3 text-sm">
          <summary className="cursor-pointer font-medium">실습 힌트</summary>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-gray-600">
            <li>app 밖에 로그인 식별자와 토큰, 변경 함수를 공유하는 컨텍스트와 Provider를 직접 만드세요.</li>
            <li>로그인 입력을 담당할 하위 페이지 또는 보조 컴포넌트를 직접 만들고 위 폼 틀을 옮겨 사용하세요.</li>
            <li>입력 상태와 공통 변경 이벤트를 작성하고, 로그인 시 공유 상태와 브라우저 저장소를 갱신하세요.</li>
            <li>로그아웃 시 공유 상태와 저장소를 함께 비우고 로그인 화면으로 이동하도록 작성하세요.</li>
            <li>저장한 로그인 정보를 복원할 때는 브라우저에서 실행되는 시점과 초기화 여부를 고려하세요. 비밀번호는 저장하지 마세요.</li>
            <li>원본처럼 연습용 로그인 상태만 다루며 실제 인증 서버와의 통신은 이번 실습 범위에 포함하지 않습니다.</li>
          </ul>
        </details>
      </div>
    </section>
  );
}
