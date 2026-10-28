package com.mycompany.demo.database.entity;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Board {
    private Long boardId;
    private String title;
    private String content;
    private String writer;
    private LocalDateTime date;
    private Long productId;
}
