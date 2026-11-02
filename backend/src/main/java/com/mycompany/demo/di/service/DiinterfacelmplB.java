package com.mycompany.demo.di.service;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;

@Service 
@Primary // 같은 타입의 후보가 여러 개일 때, 단일 빈 주입에서 이 빈을 우선 선택한다.
@Slf4j
public class DiinterfacelmplB implements Diinterface {

    @Override
    public void method() {
     log.info("실행");  
    }


}
