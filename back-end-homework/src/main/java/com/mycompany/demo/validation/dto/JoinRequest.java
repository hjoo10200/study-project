package com.mycompany.demo.validation.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data 
@AllArgsConstructor 
@NoArgsConstructor 
public class JoinRequest {
    @NotBlank(message = "아이디는 필수 입력 항목입니다.")
    @Size(min = 5, max = 20, message = "아이디는 5~20자여야 합니다.")
    @Pattern(regexp = "[a-zA-Z][a-zA-Z0-9_]*", message = "아이디는 영문자로 시작하고 영문, 숫자, 밑줄(_)만 사용할 수 있습니다.")
    private String mid;

    @NotBlank(message = "이름은 필수 입력 항목입니다.")
    @Size(min = 2, max = 50, message = "이름은 2~50자여야 합니다.")
    private String mname;

    @NotBlank(message = "이메일은 필수 입력 항목입니다.")
    @Email(message = "올바른 이메일 형식으로 입력해주세요.")
    @Size(max = 254, message = "이메일은 254자 이하여야 합니다.")
    private String memail;

    @NotBlank(message = "비밀번호는 필수 입력 항목입니다.")
    @Size(min = 8, max = 64, message = "비밀번호는 8~64자여야 합니다.")
    private String mpassword;

    // int는 null을 표현하지 못하므로 @NotNull로 누락을 검출할 수 없다. 누락 구분이 필요하면 Integer와 함께 사용해야 한다.
    @NotNull(message = "나이는 필수 입력 항목입니다.")
    @Min(value = 0, message = "나이는 0 이상이어야 합니다.")
    @Max(value = 120, message = "나이는 120 이하여야 합니다.")
    private int mage;
}
