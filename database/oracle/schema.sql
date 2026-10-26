-- Oracle ORCL 서비스의 ORACLE 스키마를 기준으로 작성한 신규 DB용 DDL입니다.
-- 한글 주석은 설명을 위해 추가했습니다.
CREATE TABLE member (
    member_id VARCHAR2(15 BYTE) NOT NULL,
    member_name VARCHAR2(20 BYTE) NOT NULL,
    password VARCHAR2(100 BYTE) NOT NULL,
    email VARCHAR2(50 BYTE),
    joined_at DATE DEFAULT sysdate NOT NULL,
    CONSTRAINT pk_member PRIMARY KEY (member_id),
    CONSTRAINT uq_member_email UNIQUE (email)
);

CREATE TABLE board (
    board_id NUMBER(*,0) NOT NULL,
    title VARCHAR2(200 BYTE) NOT NULL,
    content CLOB NOT NULL,
    writer VARCHAR2(15 BYTE) NOT NULL,
    writed_at DATE NOT NULL,
    product_id NUMBER(*,0) NOT NULL,
    CONSTRAINT pk_board PRIMARY KEY (board_id),
    CONSTRAINT fk_board_member FOREIGN KEY (writer) REFERENCES member (member_id)
);

CREATE TABLE product (
    product_id NUMBER(*,0) NOT NULL,
    product_name VARCHAR2(200 BYTE) NOT NULL,
    price NUMBER(*,0) NOT NULL,
    seller_id NUMBER(*,0) NOT NULL,
    CONSTRAINT pk_product PRIMARY KEY (product_id)
);

CREATE TABLE seller (
    seller_id NUMBER(*,0) NOT NULL,
    seller_name VARCHAR2(200 BYTE) NOT NULL,
    email VARCHAR2(254 BYTE) NOT NULL,
    phone VARCHAR2(15 BYTE) NOT NULL,
    registered_at DATE NOT NULL,
    CONSTRAINT pk_seller PRIMARY KEY (seller_id),
    CONSTRAINT uq_seller_email UNIQUE (email)
);

ALTER TABLE product ADD CONSTRAINT fk_product_seller
    FOREIGN KEY (seller_id) REFERENCES seller (seller_id);

ALTER TABLE board ADD CONSTRAINT fk_board_product
    FOREIGN KEY (product_id) REFERENCES product (product_id);

COMMENT ON TABLE member IS '회원 정보';
COMMENT ON COLUMN member.member_id IS '회원 아이디';
COMMENT ON COLUMN member.member_name IS '회원 이름';
COMMENT ON COLUMN member.password IS '비밀번호';
COMMENT ON COLUMN member.email IS '회원 이메일 주소';
COMMENT ON COLUMN member.joined_at IS '회원가입 일시';
COMMENT ON TABLE board IS '게시판';
COMMENT ON COLUMN board.board_id IS '게시물 번호';
COMMENT ON COLUMN board.title IS '게시물 제목';
COMMENT ON COLUMN board.content IS '게시물 내용';
COMMENT ON COLUMN board.writer IS '작성자 회원 아이디';
COMMENT ON COLUMN board.writed_at IS '게시물 작성 일시';
COMMENT ON COLUMN board.product_id IS '상품 번호';
COMMENT ON TABLE product IS '상품 정보';
COMMENT ON COLUMN product.product_id IS '상품 번호';
COMMENT ON COLUMN product.product_name IS '상품 이름';
COMMENT ON COLUMN product.price IS '상품 가격';
COMMENT ON COLUMN product.seller_id IS '판매자 번호';
COMMENT ON TABLE seller IS '판매자 정보';
COMMENT ON COLUMN seller.seller_id IS '판매자 번호';
COMMENT ON COLUMN seller.seller_name IS '판매자 이름';
COMMENT ON COLUMN seller.email IS '판매자 이메일 주소';
COMMENT ON COLUMN seller.phone IS '판매자 연락처';
COMMENT ON COLUMN seller.registered_at IS '판매자 등록 일시';

CREATE TABLE orders (
    order_id NUMBER(19,0) NOT NULL,
    member_id VARCHAR2(50 CHAR) NOT NULL,
    ordered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    CONSTRAINT pk_orders PRIMARY KEY (order_id),
    CONSTRAINT fk_orders_member FOREIGN KEY (member_id) REFERENCES member (member_id)
);

CREATE TABLE order_item (
    order_id NUMBER(*,0) NOT NULL,
    product_id NUMBER(*,0) NOT NULL,
    quantity NUMBER(*,0) NOT NULL,
    unit_price NUMBER(*,0) NOT NULL,
    CONSTRAINT pk_order_item PRIMARY KEY (order_id, product_id),
    CONSTRAINT fk_orders_item_orders FOREIGN KEY (order_id) REFERENCES orders (order_id),
    CONSTRAINT fk_orders_item_product FOREIGN KEY (product_id) REFERENCES product (product_id)
);

COMMENT ON TABLE order_item IS '주문에 포함된 상품 정보';
COMMENT ON COLUMN order_item.order_id IS '주문 번호';
COMMENT ON COLUMN order_item.product_id IS '주문한 상품 번호';
COMMENT ON COLUMN order_item.quantity IS '주문 수량';
COMMENT ON COLUMN order_item.unit_price IS '주문 당시 상품 한 개의 가격';

COMMENT ON TABLE orders IS '회원의 주문 정보';
COMMENT ON COLUMN orders.order_id IS '주문 번호';
COMMENT ON COLUMN orders.member_id IS '주문한 회원 아이디';
COMMENT ON COLUMN orders.ordered_at IS '주문 일시';
