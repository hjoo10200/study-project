package com.mycompany.demo.database.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.mycompany.demo.database.dto.Pager;
import com.mycompany.demo.database.entity.Product;

@Mapper 
public interface ProductDao {
    // Insert: 데이터를 저장하는 메소드(C)
    int insert(Product product);

    // Select: 기본키로 조회하는 메소드(R)
    Product selectById(String productId);

    // 검색 조건(where)에 맞는 전체 행 수를 반환한다(페이지 수 계산용).
    int selectCount(@Param("where") Map<String, Object> where);

    // Select: 검색 조건(where)에 맞는 데이터 중 pager가 지정한 한 페이지를 조회한다(R).
    List<Product> selectPage(@Param("pager") Pager pager, @Param("where") Map<String, Object> where);

    // Update: 주어진 값으로 수정하는 메소드(U)
    int update(Product product);
    
    // Delete: 기본키로 삭제하는 메소드(D)
    int deleteById(String productId);
}
