package com.mycompany.demo.di.service;
import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;

@Service // 싱글빈을 선언적으로 생성
@Slf4j
public class MemberService {
    public void join(){
        log.info("회원가입 처리됨");
    }
}

