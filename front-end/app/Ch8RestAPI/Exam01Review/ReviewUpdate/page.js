"use client";

import { reviewDetail, Update } from "@/apis/reviewApi";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function ReviewUpdate() {

    // ReviewDetail이 보낸 데이터 받기
    const reviewId = useSearchParams().get("reviewId");
    const [errors, setErrors] = useState({});
    // DOM 참조: <input type="file">
    const fileInputRef = useRef(null);
    const titleInputRef = useRef(null);
    const contentInputRef = useRef(null);
    // 사용자가 선택한 파일 이름을 저장하는 상태
    const [selectedFileName, setSelectedFileName] = useState("");
    // ReviewDetail로 돌아가기 위한 경로
    const detailUrl = `/Ch8RestAPI/Exam01Review/ReviewDetail?reviewId=${reviewId}`;

    const validateTitle = (value) => {
        if (!value.trim()) return "제목을 입력해 주세요.";
        if (value.length > 200) return "제목은 200자 이하로 입력해 주세요.";
        return "";
    };

    const validateContent = (value) => {
        return value.trim() ? "" : "내용을 입력해 주세요.";
    };
    //-------------------------------------------------------------------
    // 입력 양식과 연결되는 상태 정의
    const [updateForm, SetUpdateForm] = useState(
        {
            title: "",
            content: "",
            deleteFile: false
        });
    console.log(updateForm)
    // reviewId의 게시글을 가져오기
    useEffect(() => {
        const work = async () => {
            try {
                const response = await reviewDetail(reviewId);
                SetUpdateForm(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        work();

    }, [reviewId]);
    //title 과 content가 변경될때 상태를 변경하는 함수
    const handleChange = (event) => {
        if (event.target.name === "deleteFile") {
            SetUpdateForm({ ...updateForm, deleteFile: event.target.checked });
        } else {
            SetUpdateForm({ ...updateForm, [event.target.name]: event.target.value })
        }
    }

    // 페이지 이동을 위한 라우터 얻기
    const router = useRouter();
    //-------------------------------------------------------------------
    // 제출 버튼을 클릭했을 때 호출
    const handleSubmit = async () => {
        // 유효성 검사
        const nextErrors = {
            title: validateTitle(updateForm.title),
            content: validateContent(updateForm.content),
        };
        setErrors(nextErrors);
        const firstInvalidField = Object.keys(nextErrors).find((name) => nextErrors[name]);
        if (firstInvalidField) {
            (firstInvalidField === "title" ? titleInputRef : contentInputRef).current.focus();
            return;
        }
        //-------------------------------------------------------------------------
        const formData = new FormData();
        formData.append("reviewId", reviewId);
        formData.append("title", updateForm.title);
        formData.append("content", updateForm.content);
        if (updateForm.deleteFile) {
            formData.append("deleteFile", updateForm.deleteFile);
        }
        if (fileInputRef.current.files.length === 1) {
            formData.append("file", fileInputRef.current.files[0]);
        }
        try {
            await Update(formData);
            router.push("/Ch8RestAPI/Exam01Review/ReviewDetail?reviewId=" + reviewId)
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <section className="min-w-0 w-full rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-100 shadow-sm">
            <header className="rounded-t-lg border-b border-zinc-700 bg-zinc-800 px-4 py-1">
                <h2 className="font-semibold">ReviewUpdate</h2>
            </header>
            <div className="bg-zinc-950/30 p-4 sm:p-8">
                <div className="mx-auto max-w-[960px] w-full">
                    <div className="mb-5 flex items-start justify-between gap-3">
                        <div className="border-l-4 border-yellow-400 pl-4">
                            <p className="text-xs font-semibold tracking-widest text-yellow-300">EDIT REVIEW</p>
                            <h3 className="mt-1 text-2xl font-bold tracking-tight">상품 후기 수정</h3>
                            <p className="mt-1 text-sm text-zinc-400">사용하면서 달라진 생각이나 새로운 이야기를 더해 보세요.</p>
                        </div>
                        <span className="shrink-0 rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-400">#{reviewId || "-"}</span>
                    </div>


                    {updateForm &&
                        <div className="space-y-5 rounded-2xl border border-zinc-700 bg-zinc-900 p-5 shadow-sm sm:p-7">
                            <dl className="flex flex-wrap gap-x-8 gap-y-2 rounded-lg bg-zinc-950/60 px-4 py-3 text-xs">
                                <div className="flex gap-2"><dt className="text-zinc-400">글쓴이</dt><dd className="font-semibold">{`: ${updateForm.writer}`}</dd></div>
                                <div className="flex gap-2"><dt className="text-zinc-400">상품 번호</dt><dd className="font-semibold">{`: ${updateForm.productId}`}</dd></div>
                            </dl>
                            <div>
                                <label htmlFor="title" className="mb-1 block text-sm font-semibold">제목</label>
                                <input value={updateForm.title} onChange={handleChange} ref={titleInputRef} id="title" aria-invalid={Boolean(errors.title)} aria-describedby={errors.title ? "title-error" : undefined} name="title" required maxLength={200} placeholder="후기를 한 줄로 요약해 주세요" className="w-full rounded-lg border border-zinc-700 bg-zinc-950/60 px-3.5 py-2.5 text-sm outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/15 transition placeholder:text-zinc-500 focus:bg-zinc-950" />
                                {errors.title && <p id="title-error" role="alert" className="mt-1 text-xs text-red-400">{errors.title}</p>}
                            </div>
                            <div>
                                <label htmlFor="content" className="mb-1 block text-sm font-semibold">내용</label>
                                <textarea value={updateForm.content} onChange={handleChange} ref={contentInputRef} id="content" aria-invalid={Boolean(errors.content)} aria-describedby={errors.content ? "content-error" : undefined} name="content" required rows={6} placeholder="상품에 대한 솔직한 후기를 남겨 주세요" className="w-full rounded-lg border border-zinc-700 bg-zinc-950/60 px-3.5 py-2.5 text-sm leading-6 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/15 transition placeholder:text-zinc-500 focus:bg-zinc-950" />
                                {errors.content && <p id="content-error" role="alert" className="mt-1 text-xs text-red-400">{errors.content}</p>}
                            </div>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div className="min-w-0 rounded-xl border border-zinc-700 bg-zinc-950/60 p-4">
                                    <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                                        <h4 className="text-sm font-semibold">현재 파일</h4>
                                        <label className="inline-flex items-center gap-2 text-xs text-zinc-300 has-disabled:opacity-50">
                                            <input type="checkbox" name="deleteFile" defaultChecked={updateForm.deleteFile} onChange={handleChange} disabled={!updateForm.fileName} className="accent-yellow-400" />
                                            파일 삭제
                                        </label>
                                    </div>
                                    <div className="flex items-center justify-between gap-2">
                                        <p aria-live="polite" className="min-w-0 break-all text-xs text-zinc-400">
                                            {updateForm.fileName ? updateForm.fileName : "첨부파일이 없습니다."}
                                        </p>
                                    </div>
                                </div>
                                <div className="min-w-0 rounded-xl border border-dashed border-zinc-600 bg-zinc-950/60 p-4">
                                    <h4 className="mb-2 text-sm font-semibold">📎 첨부파일 변경</h4>
                                    <input ref={fileInputRef} id="file" name="file" type="file" hidden onChange={(event) => setSelectedFileName(event.target.files[0]?.name || "")} />
                                    <div className="flex min-w-0 items-center gap-2">
                                        <button type="button" onClick={() => fileInputRef.current?.click()} className="shrink-0 rounded-lg border border-zinc-600 bg-zinc-900 px-3 py-1.5 text-xs font-semibold text-yellow-300 hover:bg-zinc-700">
                                            선택
                                        </button>
                                        <span aria-live="polite" className="min-w-0 break-all text-xs text-zinc-400">{selectedFileName}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end gap-2 border-t border-zinc-700 pt-4">
                                <Link href={detailUrl} className="rounded-lg border border-zinc-600 px-3 py-1.5 text-xs hover:bg-zinc-800">취소</Link>
                                <button type="button" onClick={handleSubmit} className="rounded-lg bg-yellow-400 px-4 py-1.5 text-xs font-semibold text-zinc-950 hover:bg-yellow-300">수정 저장</button>
                            </div>
                        </div>}
                </div>
            </div>
        </section>
    );
}
