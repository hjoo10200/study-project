"use client";

import { reviewFileUrl, reviewDetail } from "@/apis/reviewApi";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

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
  const [failedImage, setFailedImage] = useState(null);
  const [review, setReview] = useState({
    reviewId: "",
    title: "",
    content: "",
    writer: "",
    productId: "",
    fileName: "",
    writedAt: "",
  });

  useEffect(() => {
    const work = async () => {
      try {
        console.log("work() 실행");
        const response = await reviewDetail(reviewId);
        setReview(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    work();
  }, [reviewId]);

  return (
    <section className="min-w-0 w-full rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-100 shadow-sm">
      <header className="rounded-t-lg border-b border-zinc-700 bg-zinc-800 px-4 py-1">
        <h2 className="font-semibold">ReviewDetail</h2>
      </header>
      <div className="bg-zinc-950/30 p-4 sm:p-8">
        <article className="mx-auto w-full max-w-[960px] overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-900 shadow-sm">
          <div className="border-b border-zinc-700 p-5 sm:p-7">
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-yellow-400/20 bg-yellow-400/10 px-3 py-1 text-xs font-semibold text-yellow-300">상품 후기</span>
              <span className="text-xs text-zinc-400">후기 번호 #{review.reviewId || "-"}</span>
            </div>
            <h3 className="break-words text-2xl font-bold leading-snug tracking-tight">{review.title || "후기 제목"}</h3>
            <dl className="mt-5 grid grid-cols-1 gap-4 rounded-xl bg-zinc-800/50 p-4 text-sm sm:grid-cols-3">
              <div>
                <dt className="text-xs text-zinc-400">글쓴이</dt>
                <dd className="mt-1 break-all font-medium">{review.writer || "-"}</dd>
              </div>
              <div>
                <dt className="text-xs text-zinc-400">작성일</dt>
                <dd className="mt-1 font-medium">{review.writedAt ? new Date(review.writedAt).toLocaleString("ko-KR") : "-"}</dd>
              </div>
              <div>
                <dt className="text-xs text-zinc-400">상품 번호</dt>
                <dd className="mt-1 font-medium">{review.productId ?? "-"}</dd>
              </div>
            </dl>
          </div>
          <div className="p-5 sm:p-7">
            <h4 className="mb-3 text-sm font-semibold text-zinc-400">사용 후기</h4>
            <p className="min-h-48 whitespace-pre-wrap break-words text-sm leading-7 text-zinc-200 sm:min-h-56">
              {review.content || "후기 내용을 불러오면 이곳에 표시됩니다."}
            </p>
            <div className="mt-5 flex items-center gap-4 rounded-xl border border-zinc-700 bg-zinc-950/60 p-4">
              {review.fileName && /\.(jpe?g|png|gif|webp|avif|bmp)$/i.test(review.fileName) && failedImage !== `${review.reviewId}/${review.fileName}` ? (
                <Image
                  src={reviewFileUrl(review.reviewId)+ `&fileName=${review.fileName}`}
                  alt={`첨부 이미지: ${review.fileName}`}
                  width={80}
                  height={80}
                  unoptimized
                  onError={() => setFailedImage(`${review.reviewId}/${review.fileName}`)}
                  className="order-last ml-auto h-24 w-32 shrink-0 rounded-lg border border-zinc-700 bg-zinc-950 object-contain"
                  loading="eager"
                />
              ) : (
                <span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-zinc-800 text-xl">📎</span>
              )}
              <div className="min-w-0">
                <h4 className="text-xs font-medium text-zinc-400">첨부파일</h4>
                <p className="mt-1 break-all text-sm">{review.fileName || "첨부파일이 없습니다."}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-zinc-700 px-5 py-4 sm:px-7">
            <div className="flex gap-2">
              <Link href={`/Ch8RestAPI/Exam01Review/ReviewUpdate?reviewId=${review.reviewId}`} className="rounded-lg border border-zinc-600 px-4 py-2 text-xs font-semibold transition hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-yellow-400">
                수정하기
              </Link>
              <button type="button" className="rounded-lg border border-red-400/30 px-4 py-2 text-xs font-semibold text-red-400 transition hover:bg-red-400/10">
                삭제하기
              </button>
            </div>
            <Link href="/Ch8RestAPI/Exam01Review" className="rounded-lg bg-yellow-400 px-4 py-2 text-xs font-semibold text-zinc-950 transition hover:bg-yellow-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400">
              목록으로
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
