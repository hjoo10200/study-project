package com.mycompany.demo.database.dao;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;

import com.mycompany.demo.database.entity.Product;


@Mapper
public interface ProductDao {
    int insert(Product product);

    Product selectById(Long productId);

    List<Product> selectAll();

    int update(Product product);

    int deleteById(Long productId);
}
