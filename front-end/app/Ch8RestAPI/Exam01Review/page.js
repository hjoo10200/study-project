"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getReviewList } from "@/apis/reviewApi";

export default function Exam01Review() {
    const [reviews, setReviews] = useState([]);
    const [pager, setPager] = useState(null);
    const [pageNo, setPageNo] = useState(1);

    useEffect(() => {
        let active = true;
        //방법1
        const loadReviews = async () => {
            try {
                const response = await getReviewList(pageNo);
                if (active) {
                    setReviews(response.data.data);
                    setPager(response.data.pager);
                }
            } catch (error) {
                console.error("게시물 목록 조회 실패:", error);
            }
        }

        //방법2
        // const loadReviewss = () => {
        //     getReviewsList(2)
        //         .then((response) => {
        //             console.log(response.data);
        //         })
        //         .catch((error) => {
        //             console.error("게시물 목록 조회 실패:", error);
        //         });
        // };

        loadReviews();
        console.log("ZZZZZZZZZZZZZZZ");
        return () => { active = false; };
    }, [pageNo]);

    return (
        <div className="min-w-0 max-w-full p-4">
            <section className="w-full overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-100 shadow-sm">
                <header className="border-b border-zinc-700 bg-zinc-800 px-4 py-3">
                    <h2 className="font-semibold">Exam01Review</h2>
                </header>
                <div className="overflow-x-auto p-4">
                    <table className="w-full min-w-[760px] table-auto border-collapse text-left text-sm">
                        <caption className="pb-3 text-left font-medium text-zinc-300">
                            <div className="flex items-center justify-between gap-4">
                                <span>상품 후기 목록{pager ? ` (전체 ${pager.totalRows}개)` : ""}</span>
                                <Link href="/Ch8RestAPI/Exam01Review/ReviewWrite" className="rounded-lg bg-yellow-400 px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-yellow-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400">
                                    글쓰기
                                </Link>
                            </div>
                        </caption>
                        <colgroup>
                            <col className="w-px" />
                            <col />
                            <col className="w-px" />
                            <col className="w-px" />
                            <col className="w-px" />
                            <col className="w-px" />
                        </colgroup>
                        <thead className="bg-zinc-800 text-zinc-300">
                            <tr>
                                <th scope="col" className="whitespace-nowrap px-2.5 py-3">번호</th>
                                <th scope="col" className="px-2.5 py-3">제목</th>
                                <th scope="col" className="whitespace-nowrap px-2.5 py-3">작성자</th>
                                <th scope="col" className="whitespace-nowrap px-2.5 py-3">작성일</th>
                                <th scope="col" className="whitespace-nowrap px-2.5 py-3">상품 번호</th>
                                <th scope="col" className="whitespace-nowrap px-2.5 py-3">첨부파일</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reviews.map((review) => (
                                <tr key={review.reviewId} className="border-b border-zinc-700 hover:bg-zinc-800/50">
                                    <td className="whitespace-nowrap px-2.5 py-3">{review.reviewId}</td>
                                    <td title={review.title} className="px-2.5 py-3">
                                        {review.title.length > 25 ? `${review.title.slice(0, 25)}....` : review.title}
                                    </td>
                                    <td className="whitespace-nowrap px-2.5 py-3">{review.writer}</td>
                                    <td title={review.writedAt?.replace("T", " ")} className="whitespace-nowrap px-2.5 py-3 tabular-nums text-zinc-400">{review.writedAt?.slice(0, 10)}</td>
                                    <td className="whitespace-nowrap px-2.5 py-3">{review.productId}</td>
                                    <td className="whitespace-nowrap px-2.5 py-3">{review.fileName || "없음"}</td>
                                </tr>
                            ))}
                            {reviews.length === 0 && (
                                <tr>
                                    <td colSpan={6} className="px-4 py-8 text-center text-zinc-400">표시할 게시물이 없습니다.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                {pager && pager.totalPageNo > 0 && (
                    <nav aria-label="게시글 페이지 이동" className="flex flex-wrap items-center justify-center gap-2 border-t border-zinc-700 px-4 py-4">
                        <button type="button" aria-label="처음" title="처음" disabled={pager.pageNo === 1} onClick={() => setPageNo(1)} className="rounded border border-zinc-600 px-3 py-2 text-sm hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-40">처음</button>
                        <button type="button" aria-label="이전" title="이전" disabled={pager.groupNo <= 1} onClick={() => setPageNo(pager.startPageNo - 1)} className="rounded border border-zinc-600 px-3 py-2 text-sm hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-40">이전</button>
                        {pager.pageArray.map((number) => (
                            <button
                                key={number}
                                type="button"
                                aria-current={pager.pageNo === number ? "page" : undefined}
                                onClick={() => setPageNo(number)}
                                className={`min-w-10 rounded border px-3 py-2 text-sm ${pager.pageNo === number ? "border-yellow-400 bg-yellow-400 font-semibold text-zinc-950" : "border-zinc-600 hover:bg-zinc-800"}`}
                            >
                                {number}
                            </button>
                        ))}
                        <button type="button" aria-label="다음" title="다음" disabled={pager.groupNo >= pager.totalGroupNo} onClick={() => setPageNo(pager.endPageNo + 1)} className="rounded border border-zinc-600 px-3 py-2 text-sm hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-40">다음</button>
                        <button type="button" aria-label="맨끝" title="맨끝" disabled={pager.pageNo >= pager.totalPageNo} onClick={() => setPageNo(pager.totalPageNo)} className="rounded border border-zinc-600 px-3 py-2 text-sm hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-40">맨끝</button>
                    </nav>
                )}
            </section>
        </div>
    );
}
