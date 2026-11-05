"use client"

import { createContext, useEffect, useState } from "react"

export const AuthContext = createContext();

export default function AuthContextProvider({children}){
    const [memberId, setMemberId] = useState("");
    const [jwt,setJwt] = useState("");
    const [isInitialized, setIsInitialized] = useState("");
    
    useEffect(()=> {
        setMemberId(localStorage.getItem("memberId")??"");
        setJwt(localStorage.getItem("jwt") ?? "");
        setIsInitialized(true);
    },[]);
        
        
    // })
    const value = {
        memberId, setMemberId,
        jwt, setJwt,
        isInitialized
    }

    return (
        <AuthContext.Provider value = {value}>
            {children}
        </AuthContext.Provider>
    )

}   