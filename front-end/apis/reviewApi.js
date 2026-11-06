import api from "./axios";

export function reviewImageUrl(reviewId) {
    return api.getUri({ url: "/review/image", params: { reviewId } });
}

export function getReviewList(pageNo = 1) {
    return api.get("/review/list", {
        params: { pageNo }
    });

//get이 리턴하는것은 promise ,미래에 무엇을 할지 약속
 
}

export function reviewWrite(formData){
    return api.post("/review/write", formData);

}

export function reviewDetail(reviewId){
    return api.get("/review/detail",{
        params: { reviewId }
    })
}
