package com.mycompany.demo.di.service;

import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;

// @Service에 이름을 생략하면 기본 빈 이름은 diMemberService이다(보통 클래스명의 첫 글자를 소문자로 변환).
@Service()
@Slf4j
public class DiMemberService {
    public void join(){
        log.info("회원가입을 처리함");
}
    }
