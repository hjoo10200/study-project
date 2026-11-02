package com.mycompany.demo.di.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.mycompany.demo.di.service.BoardService;

import lombok.extern.slf4j.Slf4j;

@Configuration 
@Slf4j
public class DiConfigration {
    @Bean
    public BoardService getBoardService(){ // @Bean에 이름을 지정하지 않으면 메서드명인 getBoardService가 빈 이름이 된다.
        log.info("실행");
        return new BoardService();
    }
}
