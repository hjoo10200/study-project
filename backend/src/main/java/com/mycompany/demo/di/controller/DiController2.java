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

   

    // 생성자 주입: 필요한 의존성을 매개변수로 받고 final 필드에 보관한다. 생성자가 하나이면 @Autowired를 생략할 수 있다.
    private final DiMemberService memberService;
    private final BoardService boardService;
    private final AiService aiService;
    private final Diinterface diinterface;

    public DiController2(
        DiMemberService memberService,
        BoardService boardService,
        AiService aiService,
        @Qualifier("diinterfacelmplB") Diinterface diinterface) { 

        // 같은 인터페이스의 빈이 여러 개이므로 @Qualifier로 후보를 좁힌다. 여기서는 B의 기본 빈 이름을 사용한다.
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
