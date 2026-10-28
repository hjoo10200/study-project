package com.mycompany.demo.database.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.mycompany.demo.database.dto.Pager;
import com.mycompany.demo.database.entity.Board;

@Mapper
public interface BoardDao {
    int insert(@Param("board") Board board);

    Board selectById(@Param("boardId") long boardId);

    int selectCount(@Param("where") Map<String,Object> where);  

    List<Board> selectPage(@Param("pager") Pager pager, @Param("where") Map<String, Object> where);

    int update(@Param("board") Board board);

    int deleteById(@Param("boardId") long boardId);
}
