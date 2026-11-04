"use client";
import { AuthContext } from "@/Contexts/AuthContext";
// 이 템플릿을 다른곳에 다시 만들때는 이거보고 만드는게 아니라 일반적으로 너가 만드는 방식을 만들어라
import { useContext, useState } from "react";

export default function LoginComponent() {
    //상태정의
    const [loginForm, setLoginForm] = useState({
        memberId:"",
        password:""
    });

    // 이벤트 처리 함수
    const handleChange = (event) => {
        // if(event.target.name === "memberId"){
        //     setLoginForm(...loginForm, memberId=event.target.value)
        // } else if (event.target.name === "password"){
        //     setLoginForm(...loginForm, password=event.target.value)
        //[event.target.name]: 동적 속성 이름
        setLoginForm({...loginForm, [event.target.name]: event.target.value})
    };

    const authContext =useContext(AuthContext);
    
  const handleSubmit = () => {
    console.log(loginForm);
    // 전역 상태에 로그인 정보 저장
    authContext.setMemberId(loginForm.memberId);
    authContext.setJwt("xxx.xxxx.xxxx");
    // 새로고침과 브라우저 재실행 복원할 로그인 정보를 로컬스토리지에 저장
    localStorage.setItem("memberId", loginForm.memberId);
    localStorage.setItem("jwt", "xxx.xxxx.xxxx");
  };

    return (
        <div className="flex min-h-[75vh] items-center justify-center bg-[radial-gradient(ellipse_at_top,rgba(250,204,21,0.08),transparent_65%)] px-4 py-12 sm:px-8">
            <section className="w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 shadow-2xl shadow-black/40">
                <div className="h-1 bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-500" />
                <header className="px-8 pb-8 pt-10 sm:px-10">
                    <div aria-hidden="true" className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl border border-yellow-400/20 bg-yellow-400/10 text-yellow-300">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="5" y="10" width="14" height="11" rx="3" />
                            <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" />
                        </svg>
                    </div>
                    <p className="mb-3 text-xs font-semibold tracking-[0.22em] text-yellow-400">WELCOME BACK</p>
                    <h2 className="text-3xl font-semibold tracking-tight text-zinc-50">다시 만나 반가워요</h2>
                    <p className="mt-3 text-sm leading-6 text-zinc-400">계정 정보를 입력하고 시작하세요.</p>
                </header>
                <div className="space-y-5 px-8 pb-10 sm:px-10">
                    <div>
                        <label htmlFor="memberId" className="mb-2 block text-sm font-medium text-zinc-200">아이디 <span className="ml-1 text-xs font-normal text-zinc-500">memberId</span></label>
                        <input id="memberId" value={loginForm.memberId} onChange={handleChange} name="memberId" type="text" autoComplete="username" required placeholder="아이디를 입력하세요" className="w-full rounded-xl border border-zinc-700 bg-zinc-950/60 px-4 py-3.5 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-600 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10" />
                    </div>
                    <div>
                        <label htmlFor="password" className="mb-2 block text-sm font-medium text-zinc-200">비밀번호 <span className="ml-1 text-xs font-normal text-zinc-500">password</span></label>
                        <div className="relative">
                            <input id="password" value={loginForm.password} onChange={handleChange} name="password"  autoComplete="current-password" required placeholder="비밀번호를 입력하세요" className="w-full rounded-xl border border-zinc-700 bg-zinc-950/60 py-3.5 pl-4 pr-16 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-600 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10" />
                            
                        </div>
                    </div>
                    <div className="flex gap-3 pt-3">
                        <button type="reset" className="flex-1 rounded-xl border border-zinc-700 px-4 py-3.5 text-sm font-semibold text-zinc-300 transition hover:border-zinc-500 hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-400">취소</button>
                        <button type="submit" onClick={handleSubmit} className="flex-[2] rounded-xl bg-yellow-400 px-4 py-3.5 text-sm font-bold text-zinc-950 shadow-lg shadow-yellow-400/10 transition hover:bg-yellow-300 active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-400">로그인 <span aria-hidden="true" className="ml-2">→</span></button>
                    </div>
                </div>
            </section>
        </div>
    );
}
