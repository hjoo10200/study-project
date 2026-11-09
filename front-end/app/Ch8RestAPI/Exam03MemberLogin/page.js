"use client";

import { memberLogin } from "@/apis/memberApi";
import { AuthContext } from "@/Contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

export default function Exam03MemberLogin() {
    //양식의 데이터를 가지는 state
    const [loginForm, setLoginForm] = useState({
        memberId: "",
        password: "",
    });

    // 양식별로 생성되는 에러메시지를 저장하는 state
    const [errors, setErrors] = useState({});

    const validateMemberId = (value) => {
        return value.trim() ? "" : "아이디를 입력해 주세요."; //아이디 유효성 검사
    };

    const validatePassword = (value) => {
        return value.trim() ? "" : "비밀번호를 입력해 주세요."; //비밀번호 유효성 검사
    };
    const router = useRouter();
    const authContext = useContext(AuthContext);
    // 로그인 버튼 눌렀을때 이벤트 처리 함수
    const handleLogin = async () => {
        //입력 양식별로 유효성 검사후 반환된 에러 메시지를 저장하는 객체
        const nextErrors = {
            memberId: validateMemberId(loginForm.memberId),
            password: validatePassword(loginForm.password),
        };

        setErrors(nextErrors);
        // 오류 메시지가 하나라도 있으면 로그인 처리를 중단한다.
        if (Object.values(nextErrors).some((message) => message)) return;

        //백엔드 api 호출
        try {
            const response = await memberLogin(loginForm);
            if (response.data.status === "success") {
                // 전역 상태
                authContext.setMemberId(response.data.memberId);
                authContext.setJwt(response.data.jwt);
                // 새로고침과 브라우저 재실행 복원할 로그인 정보를 로컬스토리지에 저장
                localStorage.setItem("memberId", response.data.memberId);
                localStorage.setItem("jwt", response.data.jwt);
                router.push("/");

            } else {
                alert(response.data.message);
            }
            console.log(response.data)

        } catch (error) {
            console.log(error)
        }
    };
    // 양식의 입력값을 ,state로 저장하는 이벤트 처리함수
    const handleChange = (event) => {
        setLoginForm({ ...loginForm, [event.target.name]: event.target.value });
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
                        <input
                            id="memberId"
                            name="memberId"
                            value={loginForm.memberId}
                            onChange={handleChange}
                            type="text"
                            autoComplete="username"
                            placeholder="아이디를 입력하세요"
                            aria-invalid={Boolean(errors.memberId)}
                            aria-describedby={errors.memberId ? "memberId-error" : undefined}
                            className="w-full rounded-xl border border-zinc-700 bg-zinc-950/60 px-4 py-3.5 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-600 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10"
                        />
                        {errors.memberId && (
                            <p id="memberId-error" role="alert" className="mt-2 text-xs text-red-400">
                                {errors.memberId}
                            </p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="password" className="mb-2 block text-sm font-medium text-zinc-200">비밀번호 <span className="ml-1 text-xs font-normal text-zinc-500">password</span></label>
                        <input
                            id="password"
                            name="password"
                            value={loginForm.password}
                            onChange={handleChange}
                            type="password"
                            autoComplete="current-password"
                            placeholder="비밀번호를 입력하세요"
                            aria-invalid={Boolean(errors.password)}
                            aria-describedby={errors.password ? "password-error" : undefined}
                            className="w-full rounded-xl border border-zinc-700 bg-zinc-950/60 px-4 py-3.5 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-600 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10"
                        />
                        {errors.password && (
                            <p id="password-error" role="alert" className="mt-2 text-xs text-red-400">
                                {errors.password}
                            </p>
                        )}
                    </div>
                    <div className="space-y-3 pt-3">
                        <button
                            type="button"
                            onClick={handleLogin}
                            className="w-full rounded-xl bg-yellow-400 px-4 py-3.5 text-sm font-bold text-zinc-950 shadow-lg shadow-yellow-400/10 transition hover:bg-yellow-300 active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-400"
                        >
                            로그인 <span aria-hidden="true" className="ml-2">→</span>
                        </button>
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                type="button"
                                onClick={() => router.push("/Ch8RestAPI/Exam02MemberJoin")}
                                className="text-center rounded-xl border border-zinc-700 px-4 py-3 text-sm font-semibold text-zinc-300 transition hover:border-zinc-500 hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-400"
                            >
                                회원가입
                            </button>
                            <button
                                type="button"
                                onClick={() => router.push("/Ch8RestAPI/Exam01Review")}
                                className="text-center rounded-xl border border-zinc-700 px-4 py-3 text-sm font-semibold text-zinc-300 transition hover:border-zinc-500 hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-400"
                            >
                                목록
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
