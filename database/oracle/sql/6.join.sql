-------------------------------------------------------------------------------------------
--여러 테이블을 연결해서 데이터 조회(join)
--조건: 테이블긴의 연결이있어야함.

select member_name,title
from member,board
where member.member_id = board.writer and member.member_id='user23';
-------------------------------------------------------------------------------------------
--연결된 테이블에 공통적으로 존재하는 컬럼은 반드시 어떤 테이블에서 가져올지를 언급해아
select m.member_id, member_name, order_id, ordered_at
from member m, ORDERS o
where
    m.member_id = o.MEMBER_ID and
    m.member_id = 'user232';
-------------------------------------------------------------------------------------------

select product_name,seller_name,title, member_name 
from member m, product p, seller s, board b
where 
    b.PRODUCT_ID = p.PRODUCT_ID and
    p.SELLER_ID = s.SELLER_ID and
    m.MEMBER_ID = b.WRITER and
    p.PRODUCT_ID = 2;
    

    
