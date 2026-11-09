import api from "./axios";



export function memberjoin(joinForm) {
    //요청 본문에 raw 형식으로 json이 포함된다.
    return api.post("/database/joinmember", joinForm);
}


export function memberLogin(loginForm){
    return api.post("/database/loginmember", loginForm);
}