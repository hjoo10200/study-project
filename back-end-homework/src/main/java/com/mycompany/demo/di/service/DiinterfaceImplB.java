package com.mycompany.demo.di.service;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;

@Service 
@Slf4j 
@Primary 
public class DiinterfaceImplB implements Diinterface {
    @Override
    public void method(){
        log.info("임플B 실행");
    }
}
