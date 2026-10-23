package com.mycompany.demo.di.service;

import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;

/// 관리 빈의 이름은 클래스의 첫철자를 소문자로 바꾼 이름(여기서는 memberservice)
@Service
@Slf4j
public class MemberService {
    public void join(){
        log.info("회원가입을 처리함");
}
    }
