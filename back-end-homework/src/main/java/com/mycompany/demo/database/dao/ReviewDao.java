package com.mycompany.demo.database.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.mycompany.demo.database.dto.Pager;
import com.mycompany.demo.database.entity.Review;

@Mapper
public interface ReviewDao {
    int insert(@Param("review") Review review);

    Review selectById(@Param("reviewId") Long reviewId);

    int selectCount(@Param("where") Map<String,Object> where);  

    List<Review> selectPage(@Param("pager") Pager pager, @Param("where") Map<String, Object> where);

    int update(@Param("review") Review review);

    int deleteById(@Param("reviewId") Long reviewId);
}
