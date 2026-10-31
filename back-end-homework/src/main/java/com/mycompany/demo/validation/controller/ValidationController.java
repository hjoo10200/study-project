package com.mycompany.demo.validation.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mycompany.demo.validation.dto.JoinRequest;

import jakarta.validation.Valid;

import lombok.extern.slf4j.Slf4j;
    @RestController
    @RequestMapping("/validation")
    @Slf4j
public class ValidationController {

    public ValidationController(){
        log.info("validation 예시 실행");
     }
    
    @PostMapping("/join")
    // @RequestBody가 없으므로 폼·쿼리 파라미터를 DTO에 바인딩한 뒤 @Valid로 제약조건을 검사한다.
    public String join(@Valid JoinRequest joinRequest){

        log.info(joinRequest.toString());

        return "회원가입 완료";

    }   

   
}
