package com.mycompany.demo.database.service;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.mycompany.demo.database.dao.OrdersDao;
import com.mycompany.demo.database.dao.OrderItemDao;
import com.mycompany.demo.database.dao.ProductDao;
import com.mycompany.demo.database.dto.Pager;
import com.mycompany.demo.database.entity.Orders;
import com.mycompany.demo.database.entity.OrderItem;
import com.mycompany.demo.database.entity.Product;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service 
@RequiredArgsConstructor
@Slf4j 
public class OrderService {
    private final OrdersDao ordersDao;
    private final OrderItemDao orderItemDao;
    private final ProductDao productDao;

    // Orders CRUD 메소드
    public int registerOrder(Orders orders) {
        return ordersDao.insert(orders);
    }

    public Orders getOrder(long orderId) {
        return ordersDao.selectById(orderId);
    }

    public int updateOrder(Orders orders) {
        return ordersDao.update(orders);
    }

    public int deleteOrder(long orderId) {
        return ordersDao.deleteById(orderId);
    }

    public List<Orders> listOrder(Pager pager, Map<String, Object> where) {
        return ordersDao.selectPage(pager, where);
    }

    public int pagingOrderTotalRows(Map<String, Object> where) {
        return ordersDao.selectCount(where);
    }

    // OrderItem CRUD 메소드
    public int registerOrderItem(OrderItem orderItem) {
        return orderItemDao.insert(orderItem);
    }

    public OrderItem getOrderItem(long orderId, long productId) {
        return orderItemDao.selectById(orderId, productId);
    }

    public int updateOrderItem(OrderItem orderItem) {
        return orderItemDao.update(orderItem);
    }

    public int deleteOrderItem(long orderId, long productId) {
        return orderItemDao.deleteById(orderId, productId);
    }

    public List<OrderItem> listOrderItem(Pager pager, Map<String, Object> where) {
        return orderItemDao.selectPage(pager, where);
    }

    public int pagingOrderItemTotalRows(Map<String, Object> where) {
        return orderItemDao.selectCount(where);
    }

    // Product CRUD 메소드
    public int registerProduct(Product product) {
        return productDao.insert(product);
    }

    public Product getProduct(long productId) {
        return productDao.selectById(productId);
    }

    public int updateProduct(Product product) {
        return productDao.update(product);
    }

    public int deleteProduct(long productId) {
        return productDao.deleteById(productId);
    }

    public List<Product> listProduct(Pager pager, Map<String, Object> where) {
        return productDao.selectPage(pager, where);
    }

    public int pagingProductTotalRows(Map<String, Object> where) {
        return productDao.selectCount(where);
    }
}
