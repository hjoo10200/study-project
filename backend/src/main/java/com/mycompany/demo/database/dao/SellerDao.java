package com.mycompany.demo.database.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.mycompany.demo.database.entity.Seller;

@Mapper
public interface SellerDao {
    int insert(Seller seller);

    Seller selectById(Long sellerId);

    List<Seller> selectAll();

    int update(Seller seller);

    int deleteById(Long sellerId);
}
