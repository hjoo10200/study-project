package com.mycompany.demo.jwt.controller;

import com.mycompany.demo.di.service.AiService;

import java.util.Map;

import org.springframework.boot.autoconfigure.amqp.RabbitProperties;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mycompany.demo.database.entity.Member;
import com.mycompany.demo.jwt.dto.LoginResponse;
import com.mycompany.demo.jwt.dto.OrderRequest;
import com.mycompany.demo.jwt.dto.OrderResponse;
import com.mycompany.demo.jwt.service.jwtservice;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.security.SignatureException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;


@RestController 
@RequiredArgsConstructor 
@RequestMapping("/jwt")
@Slf4j 
public class JwtController {

    private final jwtservice jwtService;

    @PostMapping("/login")
    public LoginResponse login() {
        // Member로 변환
        Member member = new Member();
        member.setMemberId("user1");
        member.setEmail("user1@mycompany.com");
        String jwt = jwtService.createJwt(member);
        LoginResponse loginResponse = new LoginResponse();
        loginResponse.setStatus("success");
        loginResponse.setJwt(jwt);
        return loginResponse;

    }
    
    @PostMapping("/order")
    public OrderResponse order(@RequestBody OrderRequest orderRequest) {
        OrderResponse orderResponse = new OrderResponse();
        orderResponse.setStatus("fail");
       try{
        String jwt = orderRequest.getJwt();
        jwtService.validateJwt(jwt);// jwt 유효성검사
        orderResponse.setStatus("success");
        orderResponse.setMessege("유효한 토큰");
        //JWT에서 사용자 ID와 이메일 얻기
        Map<String,String> map =jwtService.getClaims(jwt);
        String memberId = map .get("memberId");
        String email = map .get("email");
        log.info("memberId:{}",memberId);
        log.info("email:{}",email);

    } catch(MalformedJwtException e){
        //JWT 형식에 위배되었을때
        
        orderResponse.setMessege("형식 위배:"+" "+e.getMessage());
    }
     catch(SignatureException e) {
        //비밀키로 복호화를 할수 없을 경우
        orderResponse.setMessege("복호화불가:"+" "+e.getMessage());

    } catch(ExpiredJwtException e){
        //유효기간이 만료된경우
        orderResponse.setMessege("유효기간 만료:"+" "+e.getMessage());
    } 

    return orderResponse;

}
}
