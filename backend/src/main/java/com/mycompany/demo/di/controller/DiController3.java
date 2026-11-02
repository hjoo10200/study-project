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
    // @RequiredArgsConstructor는 초기화되지 않은 final 필드와 필요한 @NonNull 필드의 생성자를 컴파일 시 생성한다. Spring이 그 생성자로 주입한다.
    private final DiMemberService memberService;
    private final BoardService boardService;
    private final AiService aiService;
    // Lombok은 기본적으로 필드의 @Qualifier를 생성자 매개변수에 복사하지 않는다. 명시적 생성자나 lombok.copyableAnnotations 설정으로 지정할 수 있다.
    // 이 필드에는 선택 조건이 없으므로, 현재 후보 중 @Primary가 붙은 DiinterfacelmplB가 주입된다.
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
