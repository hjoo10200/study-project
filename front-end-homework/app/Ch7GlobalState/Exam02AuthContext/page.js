// TODO: 필요한 클라이언트 지시문과 import를 직접 작성하세요.
"use client";
import { useContext } from "react";
import Link from "next/link";
import { AuthContext } from "@/Contexts/AuthContext";
import { redirect } from "next/navigation";

export default function Exam02AuthContext() {
  // TODO: 인증 컨텍스트 사용, 로그인 여부에 따른 출력과 로그아웃 처리를 직접 작성하세요.
  const authContext = useContext(AuthContext);

  const handlelogout = () => {
    authContext.setMemberId("");
    authContext.setJwt("");
    redirect("/Ch7GlobalState/Exam02AuthContext/LoginComponent");
  };
  return (
    <section className="mb-4 overflow-hidden rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm">
      <header className="border-b border-gray-200 bg-gray-100 px-4 py-3">
        <h2 className="font-semibold">Exam02AuthContext</h2>
      </header>
      <div className="space-y-4 p-4">
        {/* TODO: 로그인 상태에 따라 아래 두 요소 중 하나만 표시하도록 조건부 렌더링을 작성하세요. */}
        {authContext.memberId ? (
          <div className="flex flex-wrap gap-3">
            <button
              onClick={handlelogout}
              className="inline-flex items-center rounded-lg bg-yellow-400 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-yellow-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-400"
            >
              로그아웃
            </button>
          </div>
        ) : (
          <div className="p-4">
            <Link
              href="/Ch7GlobalState/Exam02AuthContext/LoginComponent"
              prefetch={false}
              className="inline-flex items-center rounded-lg bg-yellow-400 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-yellow-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-400"
            >
              로그인
            </Link>
          </div>
        )}
        <details className="rounded border border-gray-200 p-3 text-sm">
          <summary className="cursor-pointer font-medium">실습 힌트</summary>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-gray-600">
            <li>app 밖에 로그인 식별자와 토큰, 변경 함수를 공유하는 컨텍스트와 Provider를 직접 만드세요.</li>
            <li>로그인 입력 폼은 LoginComponent 페이지에서 작성하고, 이 페이지에서는 인증 상태에 따른 버튼 표시를 연습하세요.</li>
            <li>공유 인증 상태에서 로그인 여부를 판단하고 로그인 링크 또는 로그아웃 버튼을 표시하세요.</li>
            <li>로그아웃 시 공유 상태와 저장소를 함께 비우고 로그인 화면으로 이동하도록 작성하세요.</li>
            <li>저장한 로그인 정보를 복원할 때는 브라우저에서 실행되는 시점과 초기화 여부를 고려하세요. 비밀번호는 저장하지 마세요.</li>
            <li>원본처럼 연습용 로그인 상태만 다루며 실제 인증 서버와의 통신은 이번 실습 범위에 포함하지 않습니다.</li>
          </ul>
        </details>
      </div>
    </section>
  );
}
