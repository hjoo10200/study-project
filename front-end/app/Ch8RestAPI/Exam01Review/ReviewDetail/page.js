"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Suspense, useEffect, useState } from "react";
import { reviewDetail, reviewImageUrl } from "@/apis/reviewApi";


export default function ReviewDetail() {
    return (
        <Suspense fallback={<p className="p-6 text-sm text-zinc-400">후기를 불러오는 중입니다.</p>}>
            <ReviewDetailContent />
        </Suspense>
    );
}

function ReviewDetailContent() {
    const searchParams = useSearchParams();
    const reviewId = searchParams.get("reviewId");

    // 상세 조회 API 연결 전, 화면 구성을 확인하기 위한 미리보기 데이터입니다.
    const [review, setReview] = useState({
        reviewId:"",
        title:"",
        content:"", 
        writer:"", 
        writedAt:"", 
        productId:"",
        fileName:""
    });


    useEffect(() => {
        const work = async () => {
            try {
                console.log("work 실행")
                const response = await reviewDetail(reviewId);
                setReview(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        work();
    }, [reviewId]);

    return (
        <div className="min-w-0 px-4 py-6 sm:px-6 lg:py-8">
            <div className="mx-auto w-full max-w-6xl">
                <nav aria-label="현재 위치" className="mb-5 flex flex-wrap items-center gap-3 text-xs text-zinc-500">
                    <Link href="/Ch8RestAPI/Exam01Review" className="rounded transition hover:text-yellow-300 focus-visible:outline-2 focus-visible:outline-yellow-400">상품 후기</Link>
                    <span aria-hidden="true">/</span>
                    <span className="text-zinc-300">후기 상세</span>
                    <span className="ml-auto rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-[10px] text-zinc-400">미리보기 데이터</span>
                </nav>

                <article className="overflow-hidden rounded-2xl border border-zinc-700/80 bg-zinc-900 text-zinc-100 shadow-xl shadow-black/20">
                    <header className="border-b border-zinc-700/70 bg-gradient-to-br from-zinc-800/80 to-zinc-900 px-6 py-7 sm:px-9 sm:py-9">
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" aria-hidden="true" />
                            <span className="text-[10px] font-semibold tracking-[0.22em] text-yellow-400">PRODUCT REVIEW</span>
                            <span className="ml-auto font-mono text-xs text-zinc-500">NO. {review.reviewId || "—"}</span>
                        </div>
                        <h1 className="max-w-3xl break-words text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">{review.title}</h1>
                        <div className="mt-7 flex flex-wrap items-center gap-3">
                            <span aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-yellow-400/20 bg-yellow-400/10 text-sm font-semibold text-yellow-300">{review.writer.slice(0, 1).toUpperCase()}</span>
                            <div>
                                <p className="text-[10px] text-zinc-500">작성자</p>
                                <p className="mt-0.5 text-sm font-medium text-zinc-200">{review.writer}</p>
                            </div>
                            <div className="ml-auto text-right">
                                <p className="text-[10px] text-zinc-500">작성일</p>
                                <time dateTime={review.writedAt} className="mt-0.5 block text-xs tabular-nums text-zinc-400">{review.writedAt.replace("T", " ").slice(0, 16)}</time>
                            </div>
                        </div>
                    </header>

                    <div className="grid lg:grid-cols-[minmax(0,1fr)_260px]">
                        <section aria-labelledby="review-content-heading" className="min-w-0 px-6 py-7 sm:px-9 sm:py-8">
                            <h2 id="review-content-heading" className="mb-5 text-xs font-semibold text-zinc-500">사용 후기</h2>
                            <p className="min-h-56 whitespace-pre-wrap break-words text-sm leading-8 text-zinc-300 sm:min-h-64">{review.content}</p>
                        </section>

                        <aside aria-label="게시물 정보" className="border-t border-zinc-700/60 bg-zinc-950/25 px-6 py-7 lg:border-l lg:border-t-0">
                            <h2 className="mb-6 text-xs font-semibold text-zinc-300">게시물 정보</h2>
                            <dl className="space-y-5 text-xs">
                                <div>
                                    <dt className="mb-1.5 text-zinc-500">리뷰 번호</dt>
                                    <dd className="font-mono text-zinc-200">{review.reviewId || "—"}</dd>
                                </div>
                                <div>
                                    <dt className="mb-1.5 text-zinc-500">상품 번호</dt>
                                    <dd className="inline-flex rounded-md border border-yellow-400/15 bg-yellow-400/5 px-2.5 py-1 font-mono text-yellow-300">#{review.productId}</dd>
                                </div>
                            </dl>
                            <div className="mt-7 border-t border-zinc-700/70 pt-5">
                                <h3 className="mb-3 text-xs text-zinc-500">첨부파일</h3>
                                {review.fileName ? (
                                    <div className="space-y-3 rounded-xl border border-zinc-700 bg-zinc-800/50 p-3">
                                        {/\.(jpe?g|png|gif|webp|avif|bmp|svg)$/i.test(review.fileName) && (
                                            <Image
                                                key={`${review.reviewId}-${review.fileName}`}
                                                src={reviewImageUrl(review.reviewId)}
                                                alt={`첨부 이미지: ${review.fileName}`}
                                                width={180}
                                                height={120}
                                                unoptimized
                                                onError={(event) => { event.currentTarget.style.display = "none"; }}
                                                className="h-28 w-full rounded-lg bg-zinc-950 object-contain"
                                            />
                                        )}
                                        <div className="flex items-start gap-2.5">
                                        <span aria-hidden="true" className="text-lg">💾</span>
                                        <p className="min-w-0 break-words pt-1 text-xs leading-5 text-zinc-300">{review.fileName}</p>
                                        </div>
                                    </div>
                                ) : <p className="text-xs text-zinc-500">첨부파일이 없습니다.</p>}
                            </div>
                        </aside>
                    </div>

                    <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-zinc-700/70 px-6 py-5 sm:px-9">
                        <div className="flex items-center gap-2">
                            <Link href={`/Ch8RestAPI/Exam01Review/ReviewUpdate?reviewId=${review.reviewId}`} className="rounded-lg border border-zinc-600 px-4 py-2.5 text-xs font-semibold text-zinc-200 transition hover:border-yellow-400 hover:text-yellow-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-400">수정하기</Link>
                            <button type="button" className="rounded-lg border border-red-400/30 bg-red-400/5 px-4 py-2.5 text-xs font-semibold text-red-400 transition hover:border-red-400 hover:bg-red-400/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-400">삭제하기</button>
                        </div>
                        <Link href="/Ch8RestAPI/Exam01Review" className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-yellow-400 px-4 py-2.5 text-xs font-semibold text-zinc-950 transition hover:bg-yellow-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-400"><span aria-hidden="true">←</span> 목록으로</Link>
                    </footer>
                </article>
            </div>
        </div>
    );
}
