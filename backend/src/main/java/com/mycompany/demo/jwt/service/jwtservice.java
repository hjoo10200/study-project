package com.mycompany.demo.jwt.service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.crypto.SecretKey;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.mycompany.demo.database.entity.Member;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.JwtParser;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.security.Keys;
import lombok.extern.slf4j.Slf4j;

@Service 
@Slf4j 
public class jwtservice {
    // HMAC 서명 생성과 검증에 같은 비밀키를 사용한다. JWT 본문을 암호화하는 키가 아니다.
    private final SecretKey secretKey;
    // @Value는 jwt.secret.key 설정 값을 주입한다. 주입 자체가 값을 숨기지는 않으므로 실제 비밀키는 외부 설정으로 관리해야 한다.
    public jwtservice(@Value("${jwt.secret.key}") String jwtsecretkey) throws Exception {
        // 문자 수가 아니라 UTF-8로 변환한 바이트 수가 키 길이 기준이다.
        byte[] bytes = jwtsecretkey.getBytes("UTF-8");
        // HMAC 키는 최소 32바이트(256비트)가 필요하며, 부족하면 WeakKeyException이 발생한다.
        secretKey = Keys.hmacShaKeyFor(bytes);
    }// 

    public String createJwt(Member member){
        // 현재 시각에서 365일 후를 만료 시각으로 지정한다(달력상의 1년과는 다를 수 있다).
        Date date = new Date(new Date().getTime() + 1000L*1*60*60*24*365);
        //jwt생성
        String jwt =Jwts.builder()
                        .subject(member.getMemberId())// 표준 클레임 sub에 회원 아이디를 저장한다.
                        .claim("email",member.getEmail())// 사용자 정의 클레임 email에 이메일을 저장한다. 서명된 JWT의 본문은 읽을 수 있으므로 비밀정보를 넣지 않는다.
                        .expiration(date)// 표준 클레임 exp에 만료 시각을 설정한다.
                        .signWith(secretKey)// 키에 맞는 알고리즘으로 서명하여 위변조 검증이 가능하게 한다(암호화 아님).
                        .compact(); 

        return jwt;
        
    }

    public void validateJwt(String jwt){
        //jwt 해석자를 생성
       JwtParser jwtParser = Jwts.parser()
                                 .verifyWith(secretKey)
                                 .build();

        // 서명된 JWT를 파싱하고 서명과 만료 시각을 검증한다. 형식·서명·만료 오류 외에도 지원하지 않는 토큰 등의 예외가 발생할 수 있다.
        Jws<Claims> jws = jwtParser.parseSignedClaims(jwt);
        // 파싱·서명·만료 검사 통과를 뜻한다. 사용자 존재 여부나 주문 권한까지 확인한 것은 아니다.

    
    }




    public Map<String, String> getClaims(String jwt) {
                //jwt 해석자를 생성
       JwtParser jwtParser = Jwts.parser()
                                 .verifyWith(secretKey)
                                 .build();

        // 서명된 JWT를 파싱하고 서명과 만료 시각을 검증한다. 형식·서명·만료 오류 외에도 지원하지 않는 토큰 등의 예외가 발생할 수 있다.
        Jws<Claims> jws = jwtParser.parseSignedClaims(jwt);
        Claims claims = jws.getPayload();
        Map<String, String> map = new HashMap<>();
        map.put("memberId", claims.getSubject());
        map.put("email",claims.get("email").toString());
        return map;
    }
}
