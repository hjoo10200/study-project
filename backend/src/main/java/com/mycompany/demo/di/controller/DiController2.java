package com.mycompany.demo.di.controller;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mycompany.demo.di.service.AiService;
import com.mycompany.demo.di.service.BoardService;
import com.mycompany.demo.di.service.Diinterface;
import com.mycompany.demo.di.service.DiMemberService;

import lombok.extern.slf4j.Slf4j;


@RestController
@RequestMapping("/di2")
@Slf4j
public class DiController2 {

   

    // 의존 주입 방법 2; 생성자 주입 , 이 방식이 일반적으로 추천됨
    private final DiMemberService memberService;
    private final BoardService boardService;
    private final AiService aiService;
    private final Diinterface diinterface;

    public DiController2(
        DiMemberService memberService,
        BoardService boardService,
        AiService aiService,
        @Qualifier("diinterfacelmplB") Diinterface diinterface) { 

        //interface의 구현 클래스 객체를 주입하기 위해서는 @Qulifier("소문자로 시작하는 클래스 명(key 네임)")를 매개변수의 인터페이스이름 앞에 부기한다. 
        this.memberService = memberService;
        this.boardService = boardService;
        this.aiService = aiService;
        this.diinterface = diinterface;
    }
    

    @PostMapping("/join")
    public String join1() {
        memberService.join();
        return "회원가입2";
    }
    

    @PostMapping("/board-write")
    public String boardwrite() {
        boardService.write();
        return "게시물 업로드2";
    }
    @GetMapping("/chat")
    public String chat() {
        aiService.chat();
        return "답변 내용2";
    }

    @GetMapping ("/qualifier")
    public String qualifier(){
       diinterface.method(); 
        return "실행 결과 2";
    }
    
}
