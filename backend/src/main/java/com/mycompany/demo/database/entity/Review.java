package com.mycompany.demo.database.entity;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Review {
    private long reviewId;
    private String title;
    private String content;
    private String writer;
    private LocalDateTime writedAt;
    private long  productId;
    private String fileName;
    private String fileType;
    private byte[] fileData;
}
