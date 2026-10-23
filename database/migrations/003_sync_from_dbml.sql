-- 現 DB를 schema.dbml 기준으로 동기화합니다. 데이터 삭제 없이 반영합니다.
BEGIN;
SET LOCAL search_path = public;
DO $check$
BEGIN
    IF EXISTS (SELECT 1 FROM seller WHERE length(phone) > 20) THEN
        RAISE EXCEPTION '20자를 초과하는 판매자 연락처가 있습니다.';
    END IF;
    IF EXISTS (SELECT 1 FROM order_item WHERE quantity <> trunc(quantity)
               OR quantity > 9223372036854775807 OR quantity < -9223372036854775808) THEN
        RAISE EXCEPTION 'BIGINT로 손실 없이 변환할 수 없는 주문 수량이 있습니다.';
    END IF;
END;
$check$;
ALTER TABLE member RENAME COLUMN mpassword TO password;
ALTER TABLE orders RENAME COLUMN mid TO member_id;
ALTER TABLE order_item ALTER COLUMN quantity TYPE BIGINT USING quantity::bigint;
ALTER TABLE seller ALTER COLUMN phone TYPE VARCHAR(20);
ALTER TABLE seller ADD COLUMN registered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL;
COMMENT ON TABLE board IS '상품 후기 게시판';
COMMENT ON COLUMN board.board_id IS '게시물 번호';
COMMENT ON COLUMN board.title IS '게시물 제목';
COMMENT ON COLUMN board.content IS '게시물 내용';
COMMENT ON COLUMN board.writer IS '작성자 회원 아이디';
COMMENT ON COLUMN board.date IS '게시물 작성 일시';
COMMENT ON COLUMN board.product_id IS '후기 대상 상품 번호';
COMMENT ON TABLE member IS '회원 정보';
COMMENT ON COLUMN member.member_id IS '로그인에 사용하는 회원 아이디';
COMMENT ON COLUMN member.password IS '단방향 해시로 저장한 비밀번호';
COMMENT ON COLUMN member.email IS '회원 이메일 주소';
COMMENT ON COLUMN member.joined_at IS '회원가입 일시';
COMMENT ON TABLE order_item IS '주문에 포함된 상품 정보';
COMMENT ON COLUMN order_item.order_id IS '주문 번호';
COMMENT ON COLUMN order_item.product_id IS '주문한 상품 번호';
COMMENT ON COLUMN order_item.quantity IS '주문 수량';
COMMENT ON COLUMN order_item.unit_price IS '주문 당시 상품 한 개의 가격';
COMMENT ON TABLE orders IS '회원의 주문 정보';
COMMENT ON COLUMN orders.order_id IS '주문 번호';
COMMENT ON COLUMN orders.member_id IS '주문한 회원 아이디';
COMMENT ON COLUMN orders.ordered_at IS '주문 일시';
COMMENT ON TABLE product IS '상품 정보';
COMMENT ON COLUMN product.product_id IS '상품 번호';
COMMENT ON COLUMN product.product_name IS '상품 이름';
COMMENT ON COLUMN product.price IS '현재 상품 가격';
COMMENT ON COLUMN product.seller_id IS '상품 판매자 번호';
COMMENT ON TABLE seller IS '상품 판매자 정보';
COMMENT ON COLUMN seller.seller_id IS '판매자 번호';
COMMENT ON COLUMN seller.seller_name IS '판매자 이름 또는 상호명';
COMMENT ON COLUMN seller.email IS '판매자 이메일 주소';
COMMENT ON COLUMN seller.phone IS '판매자 연락처';
COMMENT ON COLUMN seller.registered_at IS '판매자 등록 일시';
COMMIT;
