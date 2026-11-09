"use client";

import { useState } from "react";
import { memberjoin } from "@/apis/memberApi";
import { useRouter } from "next/navigation";

export default function Exam02MemberJoin() {
    // 각 양식별로 유효성 검사를 하는 함수 정의
    function validateMemberId(value) {
        return value.trim() ? "" : "아이디를 입력해 주세요.";
    }

    function validateMemberName(value) {
        return value.trim() ? "" : "이름을 입력해 주세요.";
    }

    function validatePassword(value) {
        return value.trim() ? "" : "비밀번호를 입력해 주세요.";
    }

    function validateEmail(value) {
        if (!value.trim()) return "이메일을 입력해 주세요.";
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
            ? ""
            : "올바른 이메일 형식으로 입력해 주세요.";
    }

    // 양식의 일름을 속성으로, 값을 유효성 함수로 갖는 객체 생성
    const validators = {
        memberId: validateMemberId,
        memberName: validateMemberName,
        password: validatePassword,
        email: validateEmail,
    };

    // 각 양식별로 에러 메시지를 저장하는 상태 정의
    const [errors, setErrors] = useState({});
    // 모든 양식이 유효 여부
    const [isJoining, setIsJoining] = useState(false);
    // 서버통신처리에러가 발생시 보여지는 메시지
    const [joinMessage, setJoinMessage] = useState("");

    // 양식의 데이터를 바인딩하는 상태 정의
    const [joinForm, setJoinForm] = useState({
        memberId: "",
        memberName: "",
        password: "",
        email: "",
    });

    // 양식에 입력된 내용을 상태로 저장하는 함수 정의
    const handleChange = (event) => {
        const { name, value } = event.target;
        setJoinMessage("");
        setJoinForm((previous) => ({ ...previous, [name]: value }));
        setErrors((previous) => ({ ...previous, [name]: validators[name](value) }));
    };

    //라우터
    const router = useRouter();

    // 제출 버튼을 클릭했을 때 처리하는 함수 정의
    const handleJoin = async () => {
        //isJoining 상태가 true라면 제출 기능 중지
        if (isJoining) return;
        // 유효성 검사 에러를 메시지를 저장하는 상태를 초기화
        setJoinMessage("");

        //양식의 이름을 속성으로, 유효성 검사 결과를 값으로 저장하는 객체 정의
        const nextErrors = {
            memberId: validateMemberId(joinForm.memberId),
            memberName: validateMemberName(joinForm.memberName),
            password: validatePassword(joinForm.password),
            email: validateEmail(joinForm.email),
        };

        // errors 상태를 갱신
        setErrors(nextErrors);
        // 각양식 중에서 에러메시지가 하나라도 있으면 true가 되어 제출 기능 중지
        if (Object.values(nextErrors).some((message) => message)) return;

        //유효성 검사에 문제가 없었다면 isjoining 상태를 true로 변경
        setIsJoining(true);

        try {
            // 백엔드로 회원가입 요청
            await memberjoin(joinForm);
            // 바로 로그인 폼으로 이동
            router.push("/Ch8RestAPI/Exam03MemberLogin");
        } catch (error) {
            if (error.response?.status === 409) {
                setErrors((previous) => ({ ...previous, memberId: "이미 사용 중인 아이디입니다." }));
            } else {
                setJoinMessage("회원가입에 실패했습니다. 입력 내용을 확인하고 다시 시도해 주세요.");
            }
        } finally {
            //isjoining 상태를 초기화
            setIsJoining(false);
        }
    };

    // 초기화 버튼을 클릭했을 때 처리하는 함수 정의
    const handleReset = () => {
        //서버쪽에서 회원가입이 실패 또는 통신 에러가 생겼을때 에러 메시지를 보여주는 용도
        setJoinMessage("");
        //양식의 유효성 검사 에러메시지를 모두 삭제하는 용도
        setErrors({});

        setJoinForm({
            memberId: "",
            memberName: "",
            password: "",
            email: "",
        });
    };


    return (
        <section className="min-h-[75vh] bg-[radial-gradient(ellipse_at_top,rgba(250,204,21,0.08),transparent_65%)] px-4 py-12 text-zinc-100 sm:px-8">
            <header className="mx-auto w-full max-w-md rounded-t-3xl border border-b-0 border-white/10 border-t-yellow-400 bg-zinc-900 px-6 pb-6 pt-8 shadow-2xl shadow-black/40 sm:px-10 sm:pt-10">
                <h2 className="break-words text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">Exam02MemberJoin</h2>
            </header>
            <div className="mx-auto w-full max-w-md">
                <div className="space-y-5 rounded-b-3xl border border-t-0 border-white/10 bg-zinc-900 px-6 pb-8 shadow-2xl shadow-black/40 sm:px-10 sm:pb-10">
                    <label className="block text-sm font-medium text-zinc-200" htmlFor="memberId">
                        아이디
                        <input
                            id="memberId"
                            name="memberId"
                            aria-invalid={Boolean(errors.memberId)}
                            aria-describedby={errors.memberId ? "memberId-error" : undefined}
                            value={joinForm.memberId}
                            onChange={handleChange}
                            type="text"
                            autoComplete="username"
                            required
                            className="mt-2 block w-full rounded-xl border border-zinc-700 bg-zinc-950/60 px-4 py-3.5 text-sm text-zinc-100 outline-none transition focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10"
                        />
                    </label>
                    {errors.memberId && <p id="memberId-error" role="alert" className="text-xs text-red-400">{errors.memberId}</p>}
                    <label className="block text-sm font-medium text-zinc-200" htmlFor="memberName">
                        이름
                        <input
                            id="memberName"
                            name="memberName"
                            aria-invalid={Boolean(errors.memberName)}
                            aria-describedby={errors.memberName ? "memberName-error" : undefined}
                            value={joinForm.memberName}
                            onChange={handleChange}
                            type="text"
                            autoComplete="name"
                            required
                            className="mt-2 block w-full rounded-xl border border-zinc-700 bg-zinc-950/60 px-4 py-3.5 text-sm text-zinc-100 outline-none transition focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10"
                        />
                    </label>
                    {errors.memberName && <p id="memberName-error" role="alert" className="text-xs text-red-400">{errors.memberName}</p>}
                    <label className="block text-sm font-medium text-zinc-200" htmlFor="password">
                        비밀번호
                        <input
                            id="password"
                            name="password"
                            aria-invalid={Boolean(errors.password)}
                            aria-describedby={errors.password ? "password-error" : undefined}
                            value={joinForm.password}
                            onChange={handleChange}
                            type="password"
                            autoComplete="new-password"
                            required
                            className="mt-2 block w-full rounded-xl border border-zinc-700 bg-zinc-950/60 px-4 py-3.5 text-sm text-zinc-100 outline-none transition focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10"
                        />
                    </label>
                    {errors.password && <p id="password-error" role="alert" className="text-xs text-red-400">{errors.password}</p>}
                    <label className="block text-sm font-medium text-zinc-200" htmlFor="email">
                        이메일
                        <input
                            id="email"
                            name="email"
                            aria-invalid={Boolean(errors.email)}
                            aria-describedby={errors.email ? "email-error" : undefined}
                            value={joinForm.email}
                            onChange={handleChange}
                            type="email"
                            autoComplete="email"
                            required
                            className="mt-2 block w-full rounded-xl border border-zinc-700 bg-zinc-950/60 px-4 py-3.5 text-sm text-zinc-100 outline-none transition focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10"
                        />
                    </label>
                    {errors.email && <p id="email-error" role="alert" className="text-xs text-red-400">{errors.email}</p>}
                    <div className="grid grid-cols-3 gap-3 pt-3">
                        <button type="button" onClick={handleJoin} disabled={isJoining} className="col-span-2 rounded-xl bg-yellow-400 px-4 py-3.5 text-sm font-bold text-zinc-950 shadow-lg shadow-yellow-400/10 transition hover:bg-yellow-300 active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-400 disabled:opacity-50">
                            {isJoining ? "가입 중…" : "회원가입"}
                        </button>
                        <button type="button" onClick={handleReset} disabled={isJoining} className="rounded-xl border border-zinc-700 px-3 py-3.5 text-sm font-semibold text-zinc-300 transition hover:border-zinc-500 hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-400 disabled:opacity-50">
                            초기화
                        </button>
                    </div>
                    {joinMessage && <p role="status" className="text-sm text-zinc-300">{joinMessage}</p>}
                </div>
            </div>
        </section>
    );
}
