"use client"

import { getReviewList } from "@/apis/reviewApi";
import { useEffect, useState } from "react";


export default function Exam01Review() {
    const [reviews, setReviews] = useState([]);
    const [pager, setPager] = useState(null);
    const [pageNo, setPageNo] = useState(1);

    useEffect(() => {
        let active = true;

        const loadReviews = async () => {
            try {
                const response = await getReviewList(pageNo);
                if (active) {
                    setReviews(response.data.data)
                    setPager(response.data.pager)
                }
            } catch (error) {
                console.error("게시물 목록 조회 실패:", error);
            }

        }
        loadReviews();
        console.log("리뷰데이터 로딩 완료")
        return () => { active = false; };
    }, [pageNo]);


    return (
        <section className="mx-auto w-full max-w-6xl overflow-hidden rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-sm">
            <header className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 px-5 py-5 sm:px-6">
                <h2 id="review-list-title" className="text-xl font-semibold tracking-tight">상품 후기 목록</h2>
                {/* 2. 글쓰기 버튼을 작성 페이지로 연결하세요. */}

            </header>
            <div className="overflow-x-auto">
                <table aria-labelledby="review-list-title" className="w-full min-w-[760px] border-collapse text-left text-sm">
                    <thead className="border-b border-slate-200 bg-slate-50 text-slate-600">
                        <tr>
                            <th scope="col" className="w-20 whitespace-nowrap px-4 py-3 text-center font-medium">번호</th>
                            <th scope="col" className="px-4 py-3 font-medium">제목</th>
                            <th scope="col" className="w-32 whitespace-nowrap px-4 py-3 font-medium">작성자</th>
                            <th scope="col" className="w-32 whitespace-nowrap px-4 py-3 font-medium">작성일</th>
                            <th scope="col" className="w-24 whitespace-nowrap px-4 py-3 text-center font-medium">상품 번호</th>
                            <th scope="col" className="w-24 whitespace-nowrap px-4 py-3 text-center font-medium">첨부파일</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {reviews.map((review) => (
                            <tr key={review.reviewId} className="transition-colors hover:bg-slate-50">
                                <td className="whitespace-nowrap px-4 py-3.5 text-center tabular-nums text-slate-500">{review.reviewId}</td>
                                <td title={review.title} className="min-w-48 px-4 py-3.5 font-medium text-slate-900">{review.title}</td>
                                <td className="whitespace-nowrap px-4 py-3.5 text-slate-700">{review.writer}</td>
                                <td title={review.writedAt} className="whitespace-nowrap px-4 py-3.5 tabular-nums text-slate-600">{review.writedAt}</td>
                                <td className="whitespace-nowrap px-4 py-3.5 text-center tabular-nums text-slate-500">{review.productId}</td>
                                <td className="max-w-48 break-all px-4 py-3.5 text-center text-xs text-slate-600">{review.fileName}</td>
                            </tr>
                        ))}
                        {/* 배열의 개수는 length로 읽는다. 응답 전의 빈 배열과 조회 결과가 0건인 경우를 구분한다. */}
                        {pager && reviews.length === 0 && (
                            <tr>
                                {/* JSX에서 열을 합치는 DOM 속성 이름은 colSpan이다. */}
                                <td colSpan={6} className="px-4 py-12 text-center text-slate-500">표시할 게시물이 없습니다.</td>
                            </tr>
                        )}
                        {/* 1. 후기 목록을 한 행씩 출력하고, 제목에 상세 이동을 연결하세요. */}
                    </tbody>
                </table>
            </div>
            {/* && 뒤에는 JSX 요소 하나를 반환한다. 주석은 조건식 밖에 두고 태그는 <nav>로 시작한다. */}
            {pager && pager.totalPageNo > 0 && (
                <nav aria-label="게시글 페이지 이동" className="flex flex-wrap items-center justify-center gap-2 border-t border-slate-200 bg-slate-50 px-4 py-4">
                    <button type="button" title="처음" className="inline-flex min-h-9 items-center justify-center whitespace-nowrap rounded-lg border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 transition-colors enabled:hover:border-slate-300 enabled:hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400" disabled={pager.pageNo === 1} onClick={() => setPageNo(1)}>처음</button>
                    {/* onClick을 여는 태그 안에 넣어야 버튼을 눌렀을 때 함수가 실행된다. */}
                    <button type="button" title="이전" className="inline-flex min-h-9 items-center justify-center whitespace-nowrap rounded-lg border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 transition-colors enabled:hover:border-slate-300 enabled:hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400" disabled={pager.groupNo <= 1} onClick={() => setPageNo(pager.startPageNo - 1)}>이전</button>
                    {pager.pageArray.map((number) => {
                        // 서버가 내려주는 현재 페이지 필드는 pageNo다. 일치하는 버튼에만 aria-current를 붙인다.
                        const isCurrentPage = pager.pageNo === number;

                        return (
                            <button
                                key={number}
                                type="button"
                                className="inline-flex min-h-9 min-w-9 items-center justify-center rounded-lg border border-slate-200 bg-white px-2 text-sm font-medium tabular-nums text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 aria-[current=page]:border-indigo-600 aria-[current=page]:bg-indigo-600 aria-[current=page]:text-white aria-[current=page]:hover:bg-indigo-700"
                                aria-current={isCurrentPage ? "page" : undefined}
                                onClick={() => setPageNo(number)}
                            >
                                {number}
                            </button>
                        );
                    })}
                    <button type="button" title="다음" className="inline-flex min-h-9 items-center justify-center whitespace-nowrap rounded-lg border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 transition-colors enabled:hover:border-slate-300 enabled:hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400" disabled={pager.groupNo >= pager.totalGroupNo} onClick={() => setPageNo(pager.endPageNo + 1)}>다음</button>
                    <button type="button" title="맨끝" className="inline-flex min-h-9 items-center justify-center whitespace-nowrap rounded-lg border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 transition-colors enabled:hover:border-slate-300 enabled:hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400" disabled={pager.pageNo >= pager.totalPageNo} onClick={() => setPageNo(pager.totalPageNo)}>맨끝</button>
                </nav>
            )}
        </section >
    );
}
