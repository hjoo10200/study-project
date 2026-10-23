package com.mycompany.demo.di.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.mycompany.demo.di.service.BoardService;

import lombok.extern.slf4j.Slf4j;

@Configuration 
@Slf4j 
public class Diconfiguration {
    @Bean
    public BoardService getBoardService(){
        log.info("자동 Bean 객체(getBoardService()) 생성");
        return new BoardService();
    }



}
