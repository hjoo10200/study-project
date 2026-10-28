------------------------------------------------------------------------------------------
--모든 컬럼의 값을 조회
select *
from board
where board_id<=10;
-------------------------------------------------------------------------------------------
--특정 컬럼의 값 조회
select board_id, title, writer
from BOARD
where board_id<=10;
order by; 
-------------------------------------------------------------------------------------------
--정렬해서 조회
select board_id, title, writer
from BOARD
where board_id<=10
order by board_id desc; 
-------------------------------------------------------------------------------------------
--1차 정렬, 2차 정렬해서 조회
select *
from order_item
where order_id <= 3
order by order_id asc, product_id desc; 
-------------------------------------------------------------------------------------------
--행의 갯수 조회
select count(order_id)
from order_item;
--값의 갯수 조회
select count(email)
from member;
-------------------------------------------------------------------------------------------
--grouping
select order_id, count(PRODUCT_ID)
from order_item
where order_id <= 3
group by order_id;

--잡계함수 이전의 모든 컬럼은 group by에 있어야한다.
select order_id, PRODUCT_ID, count(*)
from order_item
where order_id <= 3
group by order_id, PRODUCT_ID;

-- 여러컬림을 계산후 집계
select order_id, sum(QUANTITY*unit_price)
from order_item
where order_id <= 3
group by order_id;
-------------------------------------------------------------------------------------------
--집계결과에 조건달기
select order_id, sum(QUANTITY*unit_price)
from order_item
where order_id <= 3
group by order_id
having sum(QUANTITY*unit_price)>=200000;


