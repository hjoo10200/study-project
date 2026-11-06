"use client";

import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef, useState } from "react";
import { reviewDetail, reviewImageUrl } from "@/apis/reviewApi";

const inputClass = "w-full rounded-lg border border-zinc-700 bg-zinc-950/60 px-3.5 py-2.5 text-sm outline-none transition placeholder:text-zinc-500 focus:border-yellow-400 focus:bg-zinc-950 focus:ring-2 focus:ring-yellow-400/15";

export default function ReviewUpdate() {
    return (
        <Suspense fallback={<p className="p-6 text-sm text-zinc-400">후기를 불러오는 중입니다.</p>}>
            <ReviewUpdateContent />
        </Suspense>
    );
}

function ReviewUpdateContent() {
    const reviewId = useSearchParams().get("reviewId");
    const [review, setReview] = useState(null);
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [file, setFile] = useState(null);
    const [removeFile, setRemoveFile] = useState(false);
    const fileInputRef = useRef(null);
    const detailUrl = `/Ch8RestAPI/Exam01Review/ReviewDetail?reviewId=${encodeURIComponent(reviewId || "")}`;

    useEffect(() => {
        let active = true;
        const work = async () => {
            try {
                if (!reviewId || !/^\d+$/.test(reviewId)) throw new Error("잘못된 리뷰 번호입니다.");
                const response = await reviewDetail(reviewId);
                if (active) setReview(response.data);
            } catch {
                if (active) setError("후기를 불러올 수 없습니다. 목록에서 다시 선택해 주세요.");
            }
        };
        work();
        return () => { active = false; };
    }, [reviewId]);

    const handleChange = (event) => {
        setReview((prev) => ({ ...prev, [event.target.name]: event.target.value }));
        setMessage("");
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // 수정 API 연결 전에는 입력값 검사까지만 수행합니다.
        setMessage(review.title.trim() && review.content.trim()
            ? "입력값을 확인했습니다. 수정 저장 기능은 준비 중이며, 변경 내용은 아직 저장되지 않았습니다."
            : "제목과 내용을 공백 없이 입력해 주세요.");
    };

    if (error) return <div role="alert" className="m-6 rounded-xl border border-red-400/30 bg-zinc-900 p-6 text-sm text-red-300">{error}<Link href="/Ch8RestAPI/Exam01Review" className="ml-3 text-yellow-300 underline">목록으로</Link></div>;
    if (!review) return <p role="status" className="p-6 text-sm text-zinc-400">수정할 후기를 불러오는 중입니다.</p>;

    return (
        <section className="min-w-0 w-full rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-100 shadow-sm">
            <header className="rounded-t-lg border-b border-zinc-700 bg-zinc-800 px-4 py-1">
                <h2 className="font-semibold">ReviewUpdate</h2>
            </header>
            <div className="bg-zinc-950/30 p-4 sm:p-8">
                <div className="mx-auto w-full max-w-[960px]">
                    <div className="mb-6 border-l-4 border-yellow-400 pl-4">
                        <p className="text-xs font-semibold tracking-widest text-yellow-400">REVIEW</p>
                        <h3 className="mt-1 text-2xl font-bold tracking-tight">상품 후기 수정</h3>
                        <p className="mt-2 text-sm leading-6 text-zinc-400">직접 사용한 후기에 새로운 경험을 더해 주세요.</p>
                    </div>
                    <form name="reviewUpdateForm" encType="multipart/form-data" onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 rounded-2xl border border-zinc-700 bg-zinc-900 p-5 shadow-sm sm:grid-cols-2 sm:p-7">
                        <dl className="flex flex-wrap gap-x-6 gap-y-2 border-b border-zinc-700 pb-4 text-xs sm:col-span-2">
                            <div className="flex min-w-0 gap-2">
                                <dt className="shrink-0 text-zinc-500">글쓴이</dt>
                                <dd className="break-all font-medium text-zinc-200">{review.writer}</dd>
                            </div>
                            <div className="flex gap-2">
                                <dt className="text-zinc-500">상품 번호</dt>
                                <dd className="font-medium text-zinc-200">{review.productId}</dd>
                            </div>
                        </dl>
                        <div className="sm:col-span-2">
                            <label htmlFor="update-title" className="mb-1 block text-sm font-semibold">제목</label>
                            <input id="update-title" name="title" value={review.title} onChange={handleChange} required maxLength={200} placeholder="상품 사용 후기를 한 줄로 요약해 주세요 (최대 200자)" className={inputClass} />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="update-content" className="mb-1 block text-sm font-semibold">내용</label>
                            <textarea id="update-content" name="content" value={review.content} onChange={handleChange} required rows={7} placeholder="사용 기간, 마음에 든 점, 아쉬운 점 등을 자유롭게 작성해 주세요." className={inputClass} />
                        </div>
                        <div className="min-w-0 rounded-xl border border-zinc-700 bg-zinc-950/60 p-3">
                            <div className="mb-3 flex items-center justify-between gap-3">
                                <h4 className="text-sm font-semibold">현재 첨부파일</h4>
                                {review.fileName && !removeFile && (
                                    <button type="button" onClick={() => { setRemoveFile(true); setMessage(""); }} className="rounded-lg border border-red-400/30 px-3 py-1 text-xs text-red-400 transition hover:bg-red-400/10 focus-visible:outline-2 focus-visible:outline-red-400">파일 삭제</button>
                                )}
                            </div>
                            <input type="hidden" name="removeFile" value={String(removeFile)} />
                            {review.fileName && !removeFile ? (
                                <div className="flex flex-wrap items-center gap-4">
                                    {/\.(jpe?g|png|gif|webp|avif|bmp|svg)$/i.test(review.fileName) && (
                                        <Image src={reviewImageUrl(review.reviewId)} alt={review.fileName} width={160} height={100} unoptimized onError={(event) => { event.currentTarget.style.display = "none"; }} className="h-24 w-40 rounded-lg bg-zinc-900 object-contain" />
                                    )}
                                    <p className="min-w-0 break-all text-xs leading-5 text-zinc-300">💾 {review.fileName}</p>
                                </div>
                            ) : <p className="text-xs text-zinc-400">{removeFile ? "현재 파일을 삭제하도록 선택했습니다. 아직 저장되지 않았습니다." : "첨부파일이 없습니다."}</p>}
                        </div>
                        <div className="min-w-0 rounded-xl border border-dashed border-zinc-600 bg-zinc-950/60 p-3">
                            <h4 id="update-file-heading" className="mb-1 block text-sm font-semibold">📎 첨부파일 변경 <span className="ml-1 text-xs font-normal text-zinc-400">선택</span></h4>
                            <p className="mb-3 text-xs text-zinc-400">{removeFile ? "필요하면 새 첨부파일을 선택하세요." : "새 파일을 선택하지 않으면 기존 첨부파일을 유지합니다."}</p>
                            <input ref={fileInputRef} id="update-file" name="file" type="file" aria-labelledby="update-file-heading" onChange={(event) => { setFile(event.target.files[0] || null); setMessage(""); }} hidden />
                            <button type="button" onClick={() => fileInputRef.current?.click()} className="rounded-lg border border-zinc-600 bg-zinc-800 px-4 py-2 text-sm font-medium text-zinc-100 transition hover:bg-zinc-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400">파일 선택</button>
                            {file && <p className="mt-3 break-all text-xs text-yellow-300">새 첨부파일: {file.name}</p>}
                        </div>
                        {message && <p role="status" className="text-xs leading-5 text-yellow-200 sm:col-span-2">{message}</p>}
                        <div className="flex flex-wrap items-center justify-end gap-3 border-t border-zinc-700 pt-3 sm:col-span-2">
                            <Link href={detailUrl} className="rounded-lg border border-zinc-600 px-3 py-1.5 text-xs font-medium transition hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-yellow-400">취소</Link>
                            <button type="submit" className="rounded-lg bg-yellow-400 px-3 py-1.5 text-xs font-semibold text-zinc-950 shadow-sm transition hover:bg-yellow-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400">수정 내용 확인</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
