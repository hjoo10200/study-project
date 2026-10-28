package com.mycompany.demo.database.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.mycompany.demo.database.dto.Pager;
import com.mycompany.demo.database.entity.Seller;

@Mapper
public interface SellerDao {
    int insert(@Param("seller") Seller seller);

    Seller selectById(@Param("sellerId") long sellerId);

    int selectCount(@Param("where") Map<String,Object> where);  

    List<Seller> selectPage(@Param("pager") Pager pager, @Param("where") Map<String, Object> where);

    int update(@Param("seller") Seller seller);

    int deleteById(@Param("sellerId")long sellerId);
}
