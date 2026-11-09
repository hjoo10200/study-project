import api from "./axios";


export function getReviewList(pageNo = 1) {
    return api.get("/review/list", {
        params: { pageNo }
    });

    //get이 리턴하는것은 promise ,미래에 무엇을 할지 약속

}

export function reviewWrite(formData) {
    return api.post("/review/write", formData);

}

export function reviewDetail(reviewId) {
    const jwt = localStorage.getItem("jwt");
    return api.get("/review/detail", { //get: 백엔드 직접 요청
        params: { reviewId },
        headers: jwt ? { Authorization: `Bearer ${jwt}` } : undefined,
    })
}

export function reviewFileUrl(reviewId) {
    return api.getUri({ url: "/review/file", params: { reviewId } }); //getUri: 직접 요청없이 요청경로 문자열만 반환
}

export function Update(formData) {
    return api.put("/review/update", formData);


}

export function reviewDelete(reviewId) {
    const data = new URLSearchParams({ reviewId }).toString();
    return api.delete("/review/delete", {
        data,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });
}
