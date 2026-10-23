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
@RequiredArgsConstructor
public class DiController {

    
@Autowired
private MemberService memberService;
// private BoardService boardService;

// @Autowired @Qualifier("diinterfaceImplA") 
// private Diinterface diinterface;





// public DiController(
//     BoardService boardService){

//         this.boardService = boardService;
//     }
 private final BoardService boardService;
 private final AiService aiService;
 private final Diinterface diinterface;


    @PostMapping("/join")
    public String join() {
        memberService.join();
    return "회원가입";
    } 

    @PostMapping("/board-write")
    public String boardwrite(){
        boardService.write();
        return "업로드 게시물";
    }

    @GetMapping("/chat")
    public String chat(){
        aiService.chat();
        return "답변 내용";
    }

    @GetMapping ("/qualifier")
    public String qualifer(){
        diinterface.method();
        return "실행결과";
    }
}
