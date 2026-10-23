package com.mycompany.demo.database.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.mycompany.demo.database.entity.OrderItem;

@Mapper
public interface OrderItemDao {
    int insert(OrderItem orderItem);

    OrderItem selectById(String orderItem);

    List<OrderItem> selectAll();

    int update(OrderItem orderItem);

    int deleteById(String orderItem);
}
