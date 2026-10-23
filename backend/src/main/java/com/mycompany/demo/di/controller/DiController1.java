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
import com.mycompany.demo.di.service.MemberService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;


@RestController
@RequestMapping("/di1")
@Slf4j
public class DiController1 {
    
    // 의존 주입 방법 1;필드 주입

    @Autowired
    private MemberService memberService;

    @Autowired
    private  BoardService boardService;

    @Autowired
    private AiService aiService;

    @Autowired @Qualifier("implA")
    private Diinterface diinterface;
   



    @PostMapping("/join")
    public String join1() {
        memberService.join();
        return "회원가입1";
    }
    

    @PostMapping("/board-write")
    public String boardwrite() {
        boardService.write();
        return "게시물 업로드1";
    }
    @GetMapping("/chat")
    public String chat() {
        aiService.chat();
        return "답변 내용1";
    }

    @GetMapping ("/qualifier")
    public String qualifier(){
       diinterface.method(); 
        return "실행 결과 1";
    }
    
}
