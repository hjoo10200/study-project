"use client"

import { createContext, useEffect, useState } from "react";

export const AuthContext =createContext();

export default function AuthContextProvider({children}){
    //상태정의
    const [memberId, setMemberId] = useState("");
    const [jwt,setJwt] = useState("");
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        // 브라우저에서 마운트된 뒤 localStorage의 인증 상태를 한 번 복원한다.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMemberId(localStorage.getItem("memberId") ?? "");
        setJwt(localStorage.getItem("jwt") ?? "")
        setIsInitialized(true);
    }, []);
    
    //전역 상태 객체
    const value = {
        memberId, setMemberId,
        jwt,setJwt,
        isInitialized
    };

    return (
    <AuthContext.Provider value = {value}>
        {children}
    </AuthContext.Provider>
    )
}
