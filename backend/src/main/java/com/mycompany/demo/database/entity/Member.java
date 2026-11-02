package com.mycompany.demo.database.entity;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Member {

    private String memberId;

    private String memberName;

    @ToString.Exclude // Lombok의 toString 출력에서만 제외한다. JSON 응답에서 이 필드를 숨기는 설정은 아니다.
    private String password;

    private String email;

    private LocalDateTime joinedAt;
}
