package com.mycompany.demo.di.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.mycompany.demo.di.service.BoardService;

import lombok.extern.slf4j.Slf4j;

@Configuration 
@Slf4j
public class DiConfigration {
    @Bean
    public BoardService getBoardService(){ //반환객체를 관리하는 이름은 메소드이름이다. 클래스의 첫철자를 소문자로 바꾼 이름이 아니다.
        log.info("실행");
        return new BoardService();
    }
}
