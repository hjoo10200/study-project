"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { reviewWrite } from "@/apis/reviewApi";
import { redirect, useRouter } from "next/navigation";

export default function ReviewWrite() {
    //양식의 문자 파트 값을 갖는 상태 정의
    const [review, setReview] = useState({
        title: "",
        content: "",
        writer: "test_member_001",
        productId: 1
    });
    //에러 메시지들을 저장하는 상태 정의
    const [errors, setErrors] = useState({
        title: "",
        content: ""
    });

    const handleChange = (event) => {
        setReview({ ...review, [event.target.name]: event.target.value });
        setErrors({ ...errors, [event.target.name]: "" })

    };



    // title 양식을 검증하는 유효성 검사함수
    const validateTitle = (value) => {
        if (!value.trim()) return "제목을 입력해 주세요.";
        if (value.length > 200) return "제목은 200자 이하로 입력해 주세요.";
        return "";
    };

    // content 양식을 검증하는 유효성 검사함수
    const validateContent = (value) => {
        return value.trim() ? "" : "내용을 입력해 주세요.";
    };

    // dom 참조
    const inputFileRef = useRef();
    const router = useRouter();
    //제출 버튼을 클릭했을때 호출되는 이벤트 처리함수 (form 태그를 쓰면 form 태그에 안쓰면 button 태그에 넣음)
    const handleSubmit = async (event) => {
        //form 태그의 action 기능 비활성화
        event.preventDefault();

        //상태초기화
        setErrors((prev) => ({ title: "", content: "" }));

        //유효성 검사
        const errorTitleMessage = validateTitle(review.title);
        if (errorTitleMessage) {
            // errors를 직접 쓰면 연속 변경 시 앞선 오류가 덮어써질 수 있다.
            // 람다식의 prev를 쓰면 앞선 변경이 반영된 상태를 받아 두 오류를 모두 유지한다.
            setErrors((prev) => ({ ...prev, title: errorTitleMessage }));
        };
        const errorContentMessage = validateContent(review.content);
        if (errorContentMessage) {
            setErrors((prev) => ({ ...prev, content: errorContentMessage }));
        };

        let isValid = true;
        if (errorTitleMessage !== "" || errorContentMessage !== "") {
            isValid = false;
        };

        // 포커스 이동
        if (errorTitleMessage !== "") {
            document.querySelector(`[name=title]`).focus();
        } else if (errorContentMessage !== "") {
            document.querySelector(`[name=content]`).focus();
        }

        // review 쓰기 처리(백엔드 통신)
        if (isValid) {

            // 멀티파트/폼데이터 형식으로 본문 내용을 작성
            const data = new FormData();
            data.append("title", review.title);
            data.append("content", review.content);
            data.append("writer", review.writer);
            data.append("productId", review.productId);
            if (inputFileRef.current.files.length === 1) {
                data.append("file", inputFileRef.current.files[0]);
            }
            // 백엔드 엔드 포인트 호출
            try {
                await reviewWrite(data);
                // redirect("/Ch8RestAPI/Exam01Review") //비동기 함수에서 사용못함
                router.push("/Ch8RestAPI/Exam01Review")
            } catch (error) {
            }
        }
    };

    return (
        <section className="min-w-0 w-full rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-100 shadow-sm">
            <header className="rounded-t-lg border-b border-zinc-700 bg-zinc-800 px-4 py-1">
                <h2 className="font-semibold">ReviewWrite</h2>
            </header>
            <div className="bg-zinc-950/30 p-4 sm:p-8">
                <div className="mx-auto w-full max-w-[960px]">
                    <div className="mb-6 border-l-4 border-yellow-400 pl-4">
                        <p className="text-xs font-semibold tracking-widest text-yellow-400">REVIEW</p>
                        <h3 className="mt-1 text-2xl font-bold tracking-tight">상품 후기 작성</h3>
                        <p className="mt-2 text-sm leading-6 text-zinc-400">직접 사용한 솔직한 후기를 들려주세요.</p>
                    </div>
                    <form name="reviewWriteForm" encType="multipart/form-data" noValidate onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 rounded-2xl border border-zinc-700 bg-zinc-900 p-5 shadow-sm sm:grid-cols-2 sm:p-7">
                        <div className="sm:col-span-2">
                            <label htmlFor="title" className="mb-1 block text-sm font-semibold">제목</label>
                            <input value={review.title} onChange={handleChange} id="title" aria-invalid={Boolean(errors.title)} aria-describedby={errors.title ? "title-error" : undefined} name="title" type="text" required maxLength={200} placeholder="상품 사용 후기를 한 줄로 요약해 주세요 (최대 200자)" className="w-full rounded-lg border border-zinc-700 bg-zinc-950/60 px-3.5 py-2.5 text-sm outline-none transition placeholder:text-zinc-500 focus:border-yellow-400 focus:bg-zinc-950 focus:ring-2 focus:ring-yellow-400/15" />
                            {errors.title && <p id="title-error" role="alert" className="mt-1 text-xs text-red-400">{errors.title}</p>}
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="content" className="mb-1 block text-sm font-semibold">내용</label>
                            <textarea defaultValue={review.content} onChange={handleChange} id="content" aria-invalid={Boolean(errors.content)} aria-describedby={errors.content ? "content-error" : undefined} name="content" required rows={7} placeholder="사용 기간, 마음에 든 점, 아쉬운 점 등을 자유롭게 작성해 주세요." className="w-full rounded-lg border border-zinc-700 bg-zinc-950/60 px-3.5 py-2.5 text-sm outline-none transition placeholder:text-zinc-500 focus:border-yellow-400 focus:bg-zinc-950 focus:ring-2 focus:ring-yellow-400/15" />
                            {errors.content && <p id="content-error" role="alert" className="mt-1 text-xs text-red-400">{errors.content}</p>}
                        </div>
                        <div>
                            <label htmlFor="writer" className="mb-1 block text-sm font-semibold">글쓴이</label>
                            <input value={review.writer} id="writer" name="writer" type="text" readOnly required maxLength={50} placeholder="가입된 회원 아이디를 입력하세요" className="w-full rounded-lg border border-zinc-700 bg-zinc-950/60 px-3.5 py-2.5 text-sm outline-none transition placeholder:text-zinc-500 focus:border-yellow-400 focus:bg-zinc-950 focus:ring-2 focus:ring-yellow-400/15" />
                        </div>
                        <div>
                            <label htmlFor="productId" className="mb-1 block text-sm font-semibold">상품 번호</label>
                            <input value={review.productId} id="productId" name="productId" type="number" readOnly required min={1} step={1} placeholder="후기를 작성할 상품 번호 (예: 1)" className="w-full rounded-lg border border-zinc-700 bg-zinc-950/60 px-3.5 py-2.5 text-sm outline-none transition placeholder:text-zinc-500 focus:border-yellow-400 focus:bg-zinc-950 focus:ring-2 focus:ring-yellow-400/15" />
                        </div>
                        <div className="rounded-xl border border-dashed border-zinc-600 bg-zinc-950/60 p-3 sm:col-span-2">
                            <label htmlFor="file" className="mb-1 block text-sm font-semibold">📎 첨부파일 <span className="ml-1 text-xs font-normal text-zinc-400">선택</span></label>
                            <p className="mb-3 text-xs text-zinc-400">후기에 함께 올릴 사진이나 파일을 선택하세요.</p>
                            <input ref={inputFileRef} id="file" name="file" type="file" className="block w-full text-sm file:mr-3 file:cursor-pointer file:rounded-lg file:border-0 file:bg-zinc-800 file:px-4 file:py-2 file:font-medium file:text-zinc-100" />
                        </div>
                        <div className="flex flex-wrap items-center justify-end gap-3 border-t border-zinc-700 pt-3 sm:col-span-2">
                            <Link href="/Ch8RestAPI/Exam01Review" className="rounded-lg border border-zinc-600 px-3 py-1.5 text-xs font-medium transition hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-yellow-400">
                                목록
                            </Link>
                            <button type="submit" className="rounded-lg bg-yellow-400 px-3 py-1.5 text-xs font-semibold text-zinc-950 shadow-sm transition hover:bg-yellow-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400">후기 등록</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

