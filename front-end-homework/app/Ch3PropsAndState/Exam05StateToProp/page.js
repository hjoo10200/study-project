// TODO: 필요한 클라이언트 지시문과 import를 이 파일 위쪽에 직접 작성하세요.
"use client";

import { useState } from "react";
import ChildComponent from "./ChildComponent";

export default function Exam05StateToProp() {
    // TODO: 필요한 변수, 상태와 이벤트 함수는 직접 작성하세요.
    const [imgFile, setImgFile] = useState("photo5.jpg")

    const changeImg = () => {
        if(imgFile === "photo5.jpg"){
            setImgFile("photo4.jpg")
        } else{
            setImgFile("photo5.jpg")
        }
    }

    return (
        <section className="mb-4 overflow-hidden rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm">
            <header className="border-b border-gray-200 bg-gray-100 px-4 py-3">
                <h2 className="font-semibold">Exam05StateToProp</h2>
            </header>
            <div className="space-y-2 p-4">
            <ChildComponent imgFile={imgFile} changeImg={changeImg}></ChildComponent>
                {/* TODO: 이미지 상태와 변경 함수를 작성하고, 자식의 이미지·버튼 및 props 연결도 직접 작성하세요. */}
            </div>
        </section>
    );
}