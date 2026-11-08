import api from "./axios";

export function getReviewList( pageNo= 1){
    return api.get("review/list", {
        params: {pageNo}
    });
}

export function reviewDetail(reviewId){
    return api.get("review/detail"),{
        params: {reviewId}
    }
}