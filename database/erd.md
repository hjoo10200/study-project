# PostgreSQL ERD

PostgreSQL 데이터베이스의 테이블 구조를 기준으로 작성한 설계입니다.

```mermaid
erDiagram
    member ||..o{ orders : "주문한다"
    member ||..o{ board : "후기를 작성한다"
    seller ||..o{ product : "판매한다"
    product ||..o{ board : "후기가 달린다"
    orders ||--o{ order_item : "주문상품을 포함한다"
    product ||--o{ order_item : "주문된다"

    member {
        varchar(50) member_id PK "회원 아이디"
        varchar(100) member_name "회원 이름"
        varchar(255) password "비밀번호 해시"
        varchar(254) email "이메일, 선택"
        timestamp joined_at "가입일, 현재 시각 기본값"
    }
    seller {
        bigint seller_id PK "판매자 번호, 자동 증가"
        varchar(100) seller_name "판매자명"
        varchar(20) phone "연락처, 선택"
        varchar(254) email "이메일, 선택"
        timestamp registered_at "판매자 등록일, 현재 시각 기본값"
    }
    product {
        bigint product_id PK "상품 번호, 자동 증가"
        bigint seller_id FK "판매자 번호"
        varchar(200) product_name "상품명"
        numeric(12,2) price "판매 단가, 0 이상"
    }
    orders {
        bigint order_id PK "주문 번호, 자동 증가"
        varchar(50) member_id FK "주문 회원 아이디"
        timestamp ordered_at "주문일, 현재 시각 기본값"
    }
    order_item {
        bigint order_id PK,FK "주문 번호"
        bigint product_id PK,FK "상품 번호"
        bigint quantity "수량, 0 초과"
        numeric(12,2) unit_price "주문 당시 단가, 0 이상"
    }
    board {
        bigint board_id PK "후기 번호, 자동 증가"
        varchar(200) title "후기 제목"
        text content "후기 본문"
        varchar(50) writer FK "작성자 회원 아이디"
        timestamp date "작성일, 현재 시각 기본값"
        bigint product_id FK "후기 대상 상품 번호"
    }
```

- `order_item`의 기본키는 `(order_id, product_id)` 복합키입니다.
- 선택 표시가 없는 컬럼은 모두 필수입니다.
- 부모 한 건에 자식은 0건 이상 존재할 수 있습니다. 현재 DB 제약조건만으로는 주문에 주문상품이 최소 한 건 있어야 한다는 조건까지 강제하지 않습니다.
- 실선은 부모 키가 자식 기본키에 포함되는 식별 관계, 점선은 비식별 관계입니다.
