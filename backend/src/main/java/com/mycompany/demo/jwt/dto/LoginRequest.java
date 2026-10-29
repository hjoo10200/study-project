package com.mycompany.demo.jwt.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data 
@NoArgsConstructor 
@AllArgsConstructor 
public class LoginRequest {
    private String MemberId;
    private String password;
}
