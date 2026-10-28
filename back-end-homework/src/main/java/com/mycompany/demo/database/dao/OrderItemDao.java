package com.mycompany.demo.database.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.mycompany.demo.database.dto.Pager;
import com.mycompany.demo.database.entity.OrderItem;

@Mapper
public interface OrderItemDao {
    int insert(OrderItem orderItem);

    OrderItem selectById(String orderItem);

    List<OrderItem> selectPage(Pager pager,String where);

    int update(OrderItem orderItem);

    int deleteById(String orderItem);
}
