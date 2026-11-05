import api from "./axios";

export function getReviewList(pageNo = 1) {
    return api.get("/review/list", {
        params: { pageNo }
    });

//get이 리턴하는것은 promise ,미래에 무엇을 할지 약속
 
}
