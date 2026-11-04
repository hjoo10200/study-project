"use client"

import { createContext, useState } from "react";
//context 객체 생성
export const ColorContext = createContext();

// 컴포넌트 정의
export default function ColorContextProvider({ children }) {

    //상태 정의
    const [color, setColor] = useState("black");

    //전역 상태 객체
    const value = {
        color,
        setColor
    };

    return (
        <ColorContext.Provider value={value}>
            {/* children에 포함되는 모든 컴포넌트에서 value 객체를 사용가능하다 */}
            {children}
        </ColorContext.Provider>
    );
}