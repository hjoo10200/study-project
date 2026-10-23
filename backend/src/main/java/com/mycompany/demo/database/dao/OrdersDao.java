package com.mycompany.demo.database.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.mycompany.demo.database.dto.Pager;
import com.mycompany.demo.database.entity.Orders;

@Mapper
public interface OrdersDao {
    int insert(Orders orders);

    Orders selectById(Long orderId);

    List<Orders> selectPage(Pager pager,String where);

    int update(Orders orders);

    int deleteById(Long orderId);
}
