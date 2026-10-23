package com.mycompany.demo.database.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.mycompany.demo.database.entity.Board;

@Mapper
public interface BoardDao {
    int insert(Board board);

    Board selectById(Long boardId);

    List<Board> selectAll();

    int update(Board board);

    int deleteById(Long boardId);
}
