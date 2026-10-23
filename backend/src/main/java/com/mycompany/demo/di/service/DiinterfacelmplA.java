package com.mycompany.demo.di.service;

import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;

@Service("implA") //관리 이름을 바꿀수있다. (기존의 이름이 가독성이 떨어지거나 장황하면 바꿔도 된다.)  
@Slf4j
public class DiinterfacelmplA implements Diinterface {

    @Override
    public void method() {
     log.info("실행");  
    }


}
