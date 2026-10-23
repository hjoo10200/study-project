package com.mycompany.demo.di.service;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;

@Service 
@Primary //우선적으로 이 인터페이스 구현 클래스를 주입하라는것
@Slf4j
public class DiinterfacelmplB implements Diinterface {

    @Override
    public void method() {
     log.info("실행");  
    }


}
