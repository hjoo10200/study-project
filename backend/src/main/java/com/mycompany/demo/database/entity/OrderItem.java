package com.mycompany.demo.database.entity;

import java.math.BigDecimal;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderItem {
    private Long orderId;
    private Long productId;
    private Long quantity;
    private Long unitPrice;
}
