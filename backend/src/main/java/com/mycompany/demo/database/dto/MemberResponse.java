package com.mycompany.demo.database.dto;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor 
@NoArgsConstructor 
// DB 엔티티를 그대로 반환하지 않고 응답에 필요한 필드만 담아 비밀번호 필드가 응답에 포함되지 않게 한다.
public class MemberResponse {

    private String memberId;

    private String memberName;

    private String email;

    private LocalDateTime joinedAt;

}
