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
-- COUNT(order_id)는 NULL이 아닌 order_id 수를 센다. 이 컬럼은 NOT NULL이므로 전체 행 수인 COUNT(*)와 같다.
select count(order_id)
from order_item;
-- COUNT(email)은 NULL이 아닌 이메일 수를 센다(중복 값도 각각 센다).
select count(email)
from member;
-------------------------------------------------------------------------------------------
--grouping
select order_id, count(PRODUCT_ID)
from order_item
where order_id <= 3
group by order_id;

-- SELECT에서 집계하지 않고 출력하는 컬럼은 GROUP BY에 포함해야 한다. 집계함수보다 앞에 쓰였는지는 관계없다.
select order_id, PRODUCT_ID, count(*)
from order_item
where order_id <= 3
group by order_id, PRODUCT_ID;

-- 각 행의 수량 × 주문 당시 단가를 계산한 뒤, 주문별로 합산한다.
select order_id, sum(QUANTITY*unit_price)
from order_item
where order_id <= 3
group by order_id;
-------------------------------------------------------------------------------------------
-- WHERE는 그룹화 전 개별 행을, HAVING은 GROUP BY로 집계한 그룹을 필터링한다.
select order_id, sum(QUANTITY*unit_price)
from order_item
where order_id <= 3
group by order_id
having sum(QUANTITY*unit_price)>=200000;


