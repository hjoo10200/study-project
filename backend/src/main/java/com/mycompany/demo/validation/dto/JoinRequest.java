package com.mycompany.demo.validation.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data 
@AllArgsConstructor 
@NoArgsConstructor 
public class JoinRequest {
    @NotBlank(message="id는 필수 입력 항목입니다.")
    @Size(min = 5, max = 20, message = "id는 5자 이상 20자 이하여야 합니다.")
    // 실제 정규식은 영문자로 시작하고 대문자를 1개 이상 요구한다. 숫자와 !, _는 허용하지만 필수는 아니므로 아래 메시지와 다르다.
    @Pattern(
        regexp = "(?=.*[A-Z])[a-zA-Z][a-zA-Z0-9!_]*",
        message = "id는 영문자로 시작하고 대문자, 숫자, 특수기호(! 또는 _)를 각각 1개 이상 포함해야 하며, 영문자, 숫자, !, _만 사용할 수 있습니다."
    )
    private String mid;

    @NotBlank(message = "이름은 필수 입력 항목입니다.")
    // 실제 최대 길이는 20자이다. 아래 메시지의 50자와 다르므로 학습 시 어노테이션 값을 기준으로 읽는다.
    @Size(min = 2, max = 20, message = "이름은 2자 이상 50자 이하여야 합니다.")
    private String mname;

    @NotBlank(message = "이메일은 필수 입력 항목입니다.")
    @Email(message = "올바른 이메일 형식이어야 합니다.")
    private String memail;

    @NotBlank(message = "비밀번호는 필수 입력 항목입니다.")
    @Size(min = 8, max = 64, message = "비밀번호는 8자 이상 64자 이하여야 합니다.")
    private String mpassword;
    

    @Min(value = 0, message = "나이는 0세 이상이어야 합니다.")
    @Max(value = 120, message = "나이는 120세 이하여야 합니다.")
    private int mage;
}
