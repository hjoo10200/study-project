-------------------------------------------------------------------------------------------
--여러 테이블을 연결해서 데이터 조회(join)
-- 이 예제는 WHERE에 조인 조건을 적는 내부 조인이다. FK 선언이 없어도 조인할 수 있으며, 연결 조건을 빠뜨리면 의도치 않은 행 조합이 생긴다.

select member_name,title
from member,board
where member.member_id = board.writer and member.member_id='user23';
-------------------------------------------------------------------------------------------
-- 같은 이름의 컬럼이 여러 테이블에 있으면 m.member_id처럼 테이블명 또는 별칭으로 구분해야 한다.
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
    

    
