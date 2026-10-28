package com.mycompany.demo.di.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mycompany.demo.di.service.AiService;
import com.mycompany.demo.di.service.BoardService;
import com.mycompany.demo.di.service.Diinterface;
import com.mycompany.demo.di.service.DiMemberService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;


@RestController
@RequestMapping("/di3")
@Slf4j
@RequiredArgsConstructor
public class DiController3 {


    //의존 주입 방법 3;생성자 주입
    //클래스위에 @RequiredArgsConstructor을 넣으면 필드 선언만있으면 자동으로 생성자 실행됨
    private final DiMemberService memberService;
    private final BoardService boardService;
    private final AiService aiService;
    // @Qualifier("diinterfacelmplB") Diinterface 롬복 어노테이션을 사용할때는 qulifier를 통한 구현 클래스 객체 선택 주입 불가,
    // @Primary가 있는 클래스가 기본적으로 주입
    private final Diinterface diinterface;


    @PostMapping("/join")
    public String join1() {
        memberService.join();
        return "회원가입3";
    }
    

    @PostMapping("/board-write")
    public String boardwrite() {
        boardService.write();
        return "게시물 업로드3";
    }
    @GetMapping("/chat")
    public String chat() {
        aiService.chat();
        return "답변 내용3";
    }
    
    @GetMapping ("/qualifier")
    public String qualifier(){
       diinterface.method(); 
        return "실행 결과 3";
    }
    
}
