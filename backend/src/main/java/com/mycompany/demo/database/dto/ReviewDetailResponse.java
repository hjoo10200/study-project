package com.mycompany.demo.database.dto;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ReviewDetailResponse {
    private long reviewId;
    private String title;
    private String content;
    private String writer;
    private LocalDateTime writedAt;
    private long productId;
    private String fileName;
    private boolean deleteFile;
}
