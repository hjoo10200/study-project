package com.mycompany.demo.di.service;

import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;

@Service("implA") // 빈 이름을 implA로 지정하므로 @Qualifier("implA")로 선택할 수 있다.
@Slf4j
public class DiinterfacelmplA implements Diinterface {

    @Override
    public void method() {
     log.info("실행");  
    }


}
