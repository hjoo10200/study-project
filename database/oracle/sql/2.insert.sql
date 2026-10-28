
-- ----------------------------
-- --member 테이블의 데이터 저장
-- ----------------------------

-- -- 회원 한 명 삽입: 완전한 컬럼 리스트의 값을 저장함(메모리에만 저장,아직 DB저장x)
-- insert into member (member_id, member_name, password, email, joined_at)
-- values ('Hong123', '홍길동', 'test1234', 'hong@example.com', sysdate);
-- -- 작업내용을 물리적 DB에 반영(미반영시 ROLLBACK)
-- commit;

-- -- 컬럼 리스트를 생략
-- insert into member 
-- values ('Hong1234', '홍길동', 'test1234', 'hong1@example.com', sysdate);
-- commit;


-- -- 기본값을 갖는 컬럼은 생략가능
-- insert into member (member_id, member_name, password, email)
-- values ('Hong12345', '홍길동', 'test1234', 'hong2@example.com');
-- commit;

-- --NULL을 가질수 있는 컬럼은 생략가능
-- insert into member (member_id, member_name, password, email)
-- values ('Hong123456', '홍길동', 'test1234', null);
-- commit;

-- insert into member (member_id, member_name, password)
-- values ('Hong1234567', '홍길동', 'test1234');
-- commit;

-- ----------------------------
-- --seller 테이블의 데이터 저장
-- ----------------------------
-- insert into seller (seller_name, email, phone)
-- values ('홍길동', 'hong@mycompany.com', '0101231234');
-- commit;

-- insert into seller 
-- values ('홍길서', 'hong2@mycompany.com', '0101231235');
-- commit;


-------------------------------------
--전체 테이블에 샘플 데이터를 생성
-------------------------------------

-- 각 테이블에 1,000건씩, 총 6,000건을 생성합니다.
-- 회원 아이디: user1 ~ user1000
-- 숫자 PK는 Oracle IDENTITY가 생성하며 RETURNING으로 FK에 연결합니다.
-- 이미 같은 회원 아이디/이메일이 있으면 삽입 전에 중단합니다.
-- 전체 작업을 하나의 트랜잭션으로 처리하며 오류가 발생하면 롤백합니다.
WHENEVER SQLERROR EXIT FAILURE ROLLBACK

DECLARE
    v_member_id     member.member_id%TYPE;
    v_seller_id     seller.seller_id%TYPE;
    v_product_id    product.product_id%TYPE;
    v_order_id      orders.order_id%TYPE;
    v_price         product.price%TYPE;
    v_ordered_at    orders.ordered_at%TYPE;
    v_conflicts     PLS_INTEGER;
BEGIN
    SELECT COUNT(*) INTO v_conflicts
    FROM member
    WHERE member_id IN (
        SELECT 'user' || LEVEL FROM dual CONNECT BY LEVEL <= 1000
    ) OR email IN (
        SELECT 'user' || LEVEL || '@sample.example'
        FROM dual CONNECT BY LEVEL <= 1000
    );

    IF v_conflicts > 0 THEN
        RAISE_APPLICATION_ERROR(-20001, '샘플 회원 아이디 또는 이메일이 이미 존재합니다.');
    END IF;

    SELECT COUNT(*) INTO v_conflicts
    FROM seller
    WHERE email IN (
        SELECT 'seller' || LEVEL || '@sample.example'
        FROM dual CONNECT BY LEVEL <= 1000
    );

    IF v_conflicts > 0 THEN
        RAISE_APPLICATION_ERROR(-20002, '샘플 판매자 이메일이 이미 존재합니다.');
    END IF;

    FOR i IN 1..1000 LOOP
        v_member_id := 'user' || i;
        v_price := 1000 + MOD(i * 137, 990) * 100;
        v_ordered_at := TIMESTAMP '2026-01-01 09:00:00'
                        + NUMTODSINTERVAL(MOD(i - 1, 290), 'DAY');

        -- 1. 회원: 이름, 이메일, 가입일을 서로 다르게 생성합니다.
        INSERT INTO member (member_id, member_name, password, email, joined_at)
        VALUES (
            v_member_id, '회원' || i, 'Sample1234!',
            'user' || i || '@sample.example',
            DATE '2025-01-01' + MOD(i - 1, 365)
        );

        -- 2. 판매자: 자동 생성된 판매자 번호를 받습니다.
        INSERT INTO seller (seller_name, email, phone, registered_at)
        VALUES (
            '판매자' || i,
            'seller' || i || '@sample.example',
            '010' || TO_CHAR(i, 'FM00000000'),
            DATE '2025-01-01' + MOD(i - 1, 365)
        )
        RETURNING seller_id INTO v_seller_id;

        -- 3. 상품: 위에서 생성한 판매자에게 연결합니다.
        INSERT INTO product (product_name, price, seller_id)
        VALUES (
            CASE MOD(i - 1, 5)
                WHEN 0 THEN '키보드'
                WHEN 1 THEN '마우스'
                WHEN 2 THEN '모니터'
                WHEN 3 THEN '헤드셋'
                ELSE '노트북 거치대'
            END || ' 샘플 ' || i,
            v_price, v_seller_id
        )
        RETURNING product_id INTO v_product_id;

        -- 4. 주문: 위에서 생성한 회원에게 연결합니다.
        INSERT INTO orders (member_id, ordered_at)
        VALUES (v_member_id, v_ordered_at)
        RETURNING order_id INTO v_order_id;

        -- 5. 주문 항목: 주문과 상품을 연결하고 구매 당시 가격을 저장합니다.
        INSERT INTO order_item (order_id, product_id, quantity, unit_price)
        VALUES (v_order_id, v_product_id, MOD(i - 1, 5) + 1, v_price);

        -- 6. 게시물: 같은 회원이 구매한 상품에 대한 후기를 작성합니다.
        INSERT INTO board (title, content, writer, writed_at, product_id)
        VALUES (
            '상품 사용 후기 ' || i,
            '샘플 회원 ' || v_member_id || '의 구매 후기입니다. '
                || '배송과 품질을 확인하기 위한 실습용 게시물 ' || i || '입니다.',
            v_member_id,
            CAST(v_ordered_at AS DATE) + 1,
            v_product_id
        );
    END LOOP;
EXCEPTION
    WHEN OTHERS THEN
        ROLLBACK;
        RAISE;
END;
/

COMMIT;

-- 삽입 결과 확인: 최초 실행 시 각 테이블이 1,000건입니다.
SELECT 'member' AS table_name, COUNT(*) AS row_count FROM member
UNION ALL SELECT 'seller', COUNT(*) FROM seller
UNION ALL SELECT 'product', COUNT(*) FROM product
UNION ALL SELECT 'orders', COUNT(*) FROM orders
UNION ALL SELECT 'order_item', COUNT(*) FROM order_item
UNION ALL SELECT 'board', COUNT(*) FROM board;


