"use client";

import { useState } from "react";

export default function Exam04FormState() {
  // TODO 2: 제출 여부와 이름·이메일을 관리할 상태를 선언하세요.
  const [submitted,setSubmitted] =useState(false)
  // TODO 3: 입력 변경 시 해당 필드만 갱신하는 함수를 작성하세요.
  const [form,setForm] = useState({name:"",email:""})
  // TODO 4: 제출 버튼에서 입력값을 확인하고 제출 여부를 변경하세요.
  const handleChange = (event) => {
    if ((event.target.name)==="name"){
      setForm({...form, name:event.target.value})
    }

    else if ((event.target.name)==="email"){
      setForm({...form, email:event.target.value})
    }
  };
  
  const handleClick = () => {
    console.log(form);
    setSubmitted(true);
  }
  return (
    <section className="mb-4 overflow-hidden rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm">
      <header className="border-b border-gray-200 bg-gray-100 px-4 py-3">
        <h2 className="font-semibold">Exam04FormState</h2>
      </header>
      <div className="space-y-4 p-4">
        <div className="max-w-sm space-y-3">
          <label className="block text-sm font-medium">
            이름
            {/* TODO 5: 아래 input에 상태 값과 입력 변경 이벤트를 연결하세요. */}
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              autoComplete="name"
              required
              className="mt-1 block w-full rounded border border-zinc-300 px-3 py-2 focus:outline-2 focus:outline-emerald-600"
            />
          </label>
          <label className="block text-sm font-medium">
            이메일
            {/* TODO 6: 아래 input에도 상태 값과 입력 변경 이벤트를 연결하세요. */}
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
              required
              className="mt-1 block w-full rounded border border-zinc-300 px-3 py-2 focus:outline-2 focus:outline-emerald-600"
            />
          </label>
          {/* TODO 7: 아래 버튼에 제출 처리 함수를 연결하세요. */}
          <button
            onClick={handleClick}
            type="button"
            className="rounded-md bg-yellow-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-yellow-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
          >
            제출
          </button>
        </div>
        <div aria-live="polite">
          {submitted && (
            <div>
              <p>이름: {form.name}</p>
              <p>이메일: {form.email}</p>
            </div>
          )}
          {/* TODO 8: 제출한 경우에만 이름·이메일이 나타나도록 조건부 렌더링을 작성하세요. */}
          {/* 결과 영역 스타일 참고: rounded bg-zinc-100 p-3 text-sm */}
        </div>
      </div>
    </section>
  );
}
