"use client"

import { reviewDetail } from "@/apis/reviewApi";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ReviewDetail() {
    // TODO: 주소의 reviewId를 읽고 해당 후기를 조회하세요. 검색 매개변수 Hook을 쓴다면 로딩 경계도 작성하세요.
    const serachParams = useSearchParams();
    const reviewId = serachParams.get("reviewId");
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
                const response = await reviewDetail(reviewId);
                setReview(response.data);
                console.log("리뷰 가져오기 완료");
            } catch (error) {
                console.log(error);
            }
        };
        work();
    }, [reviewId]);
    return (
        <div className="p-4">
            <section className="mb-4 border border-gray-200 bg-white text-gray-900">
                <header className="border-b border-gray-200 bg-gray-100 px-4 py-3">
                    <h2 className="font-semibold">후기 상세</h2>
                </header>
                <div className="p-4">
                    {/* TODO: 조회 결과를 표시하고 같은 reviewId를 수정 페이지에 전달하세요. */}
                </div>
            </section>
        </div>
    );
}
