package com.mycompany.demo.di.service;
import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;

@Service // 컴포넌트 스캔으로 빈을 등록한다. 기본 singleton 범위에서는 Spring 컨테이너마다 빈 인스턴스 하나를 공유한다.
@Slf4j
public class MemberService {
    public void join(){
        log.info("회원가입 처리됨");
    }
}

