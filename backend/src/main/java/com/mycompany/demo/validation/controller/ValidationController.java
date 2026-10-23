package com.mycompany.demo.validation.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mycompany.demo.validation.dto.JoinRequest;

import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;

@RestController 
@RequestMapping ("/validation")
@Slf4j 
public class ValidationController {
    
    public ValidationController(){
        log.info("실행");

    }
    @PostMapping ("/join")
    public String join(@Valid JoinRequest joinRequet) {
        log.info(joinRequet.toString());

        return "회원가입";
    }
}
