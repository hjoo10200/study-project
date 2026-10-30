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
    //jwt를 생성하거나, 해석할때 필요한 비밀키
    private final SecretKey secretKey;
    // 문자열을 주입하는 이유는 비밀키를 만드는 문자열이 노출되어서는 안되기 때문
    public jwtservice(@Value("${jwt.secret.key}") String jwtsecretkey) throws Exception {
        // 알파벳(특수기호) 총 32개 이상의 문자로 구성된 문자열을 사용
        byte[] bytes = jwtsecretkey.getBytes("UTF-8");
        // 32byte 이상의 길이를 가지고 있어야함
        secretKey = Keys.hmacShaKeyFor(bytes);
    }// 

    public String createJwt(Member member){
        //유효기간(1년)
        Date date = new Date(new Date().getTime() + 1000L*1*60*60*24*365);
        //jwt생성
        String jwt =Jwts.builder()
                        .subject(member.getMemberId())//JWT의 subject에는 사용자의 식별값이 자징
                        .claim("email",member.getEmail())//추가적으로 저장하고 싶은 데이터 키와 데이터 저장
                        .expiration(date)//유효기간 설정
                        .signWith(secretKey)//암호된 문자열을 만들기 위한 시크릿키 설정
                        .compact(); 

        return jwt;
        
    }

    public void validateJwt(String jwt){
        //jwt 해석자를 생성
       JwtParser jwtParser = Jwts.parser()
                                 .verifyWith(secretKey)
                                 .build();

        //jwt 해석해서 claim을 생성(해석과정에서 3가지 예외발생 가능성)
        Jws<Claims> jws = jwtParser.parseSignedClaims(jwt);
        //여기까지가 성공하면 유효한 jwt임.

    
    }




    public Map<String, String> getClaims(String jwt) {
                //jwt 해석자를 생성
       JwtParser jwtParser = Jwts.parser()
                                 .verifyWith(secretKey)
                                 .build();

        //jwt 해석해서 claim을 생성(해석과정에서 3가지 예외발생 가능성)
        Jws<Claims> jws = jwtParser.parseSignedClaims(jwt);
        Claims claims = jws.getPayload();
        Map<String, String> map = new HashMap<>();
        map.put("memberId", claims.getSubject());
        map.put("email",claims.get("email").toString());
        return map;
    }
}
