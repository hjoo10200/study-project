package com.mycompany.demo.database.entity;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Seller {
    private Long sellerId;
    private String sellerName;
    private String email;
    private String phone;
    private LocalDateTime registeredAt;
}
