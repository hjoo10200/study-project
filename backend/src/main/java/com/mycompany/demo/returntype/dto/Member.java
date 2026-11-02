package com.mycompany.demo.returntype.dto;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data // 컴파일 시 getter, setter, equals, hashCode, toString 등을 생성한다.
@AllArgsConstructor // 모든 인스턴스 필드를 선언 순서대로 받는 생성자를 생성한다.
@NoArgsConstructor  // 기본 생성자 추가
public class Member {
    private int bno;
    private String bname;
    private String bid;
    private String bpassword;
    private String bhobby;
    private Date bdate;
    
}
