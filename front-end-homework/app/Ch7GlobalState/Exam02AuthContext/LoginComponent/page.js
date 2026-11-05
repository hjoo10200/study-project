"use client"

import { AuthContext } from "@/Contexts/AuthContext";
import { redirect } from "next/navigation";
import { useContext, useState } from "react";

export default function LoginComponent() {

    const [loginForm, setLoginForm] = useState({
        memberId:"",
        password:""
    })

    const handleChange = (event) => {
        setLoginForm({...loginForm, [event.target.name]: event.target.value})
    }
    const authContext = useContext(AuthContext);

    const handleSubmit = () => {
        console.log(loginForm);
        authContext.setMemberId(loginForm.memberId);
        authContext.setJwt("ccccc.cccc.ccc0");
        localStorage.setItem("memberId", loginForm.memberId);
        localStorage.setItem("jwt","ccccc.cccc.ccc0");
        redirect("/");
    }
    return (
        <div className="p-4">
            <section className="mb-4 border border-gray-200 bg-white text-gray-900">
                <header className="border-b border-gray-200 bg-gray-100 px-4 py-3">
                    <h2 className="font-semibold">LoginComponent</h2>
                </header>
                <div className="p-4">
                    <div className="max-w-sm space-y-4">
                        <label className="block text-sm font-medium">
                            아이디
                            {/* TODO: value와 onChange를 직접 연결하세요. */}
                            <input
                                type="text"
                                name="memberId"
                                autoComplete="username"
                                value={loginForm.memberId}
                                onChange={handleChange}
                                placeholder="아이디를 입력하세요"
                                required
                                className="mt-1 block w-full rounded border border-gray-300 px-3 py-2 focus:outline-2 focus:outline-yellow-500"
                            />
                        </label>
                        <label className="block text-sm font-medium">
                            비밀번호
                            {/* TODO: value와 onChange를 직접 연결하세요. */}
                            <input
                                type="password"
                                name="password"
                                autoComplete="current-password"
                                value={loginForm.password}
                                onChange={handleChange}
                                placeholder="비밀번호를 입력하세요"
                                required
                                className="mt-1 block w-full rounded border border-gray-300 px-3 py-2 focus:outline-2 focus:outline-yellow-500"
                            />
                        </label>
                        <div className="flex gap-2 pt-1">
                            {/* TODO: 취소 버튼의 동작을 직접 작성하고 연결하세요. */}
                            <button type="button" className="rounded border border-gray-300 px-4 py-2 text-sm hover:bg-gray-100">
                                취소
                            </button>
                            {/* TODO: 로그인 버튼에 작성한 처리 함수를 직접 연결하세요. */}
                            <button type="submit" onClick={handleSubmit} className="rounded bg-yellow-400 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-yellow-300">
                                로그인
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
