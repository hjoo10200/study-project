package com.mycompany.demo.di.service;

import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;

@Service 
@Slf4j 
public class DiinterfaceImplA implements Diinterface {
    @Override
    public void method(){
        log.info("임플A 실행");
    }
}
