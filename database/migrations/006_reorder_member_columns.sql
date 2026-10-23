-- PostgreSQL: 회원 컬럼 순서를 DBML과 동일하게 맞춥니다.
-- 전체 작업은 트랜잭션 안에서 진행하며, 데이터 비교 후 기존 테이블을 제거합니다.
BEGIN;
SET LOCAL lock_timeout = '10s';
LOCK TABLE public.member, public.board, public.orders IN ACCESS EXCLUSIVE MODE;

CREATE TABLE public.member_reordered (
    member_id VARCHAR(50) NOT NULL,
    member_name VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(254),
    joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

INSERT INTO public.member_reordered (member_id, member_name, password, email, joined_at)
SELECT member_id, member_name, password, email, joined_at FROM public.member;

DO $verify$
BEGIN
    IF EXISTS (
        (SELECT member_id, member_name, password, email, joined_at FROM public.member
         EXCEPT ALL
         SELECT member_id, member_name, password, email, joined_at FROM public.member_reordered)
        UNION ALL
        (SELECT member_id, member_name, password, email, joined_at FROM public.member_reordered
         EXCEPT ALL
         SELECT member_id, member_name, password, email, joined_at FROM public.member)
    ) THEN
        RAISE EXCEPTION '재구성한 회원 데이터가 원본과 일치하지 않습니다.';
    END IF;
END;
$verify$;

ALTER TABLE public.board DROP CONSTRAINT fk_board_member;
ALTER TABLE public.orders DROP CONSTRAINT fk_orders_member;
DROP TABLE public.member;
ALTER TABLE public.member_reordered RENAME TO member;
ALTER TABLE public.member ADD CONSTRAINT pk_member PRIMARY KEY (member_id);
ALTER TABLE public.board ADD CONSTRAINT fk_board_member
    FOREIGN KEY (writer) REFERENCES public.member (member_id);
ALTER TABLE public.orders ADD CONSTRAINT fk_orders_member
    FOREIGN KEY (member_id) REFERENCES public.member (member_id);

COMMENT ON TABLE public.member IS '회원 정보';
COMMENT ON COLUMN public.member.member_id IS '로그인에 사용하는 회원 아이디';
COMMENT ON COLUMN public.member.member_name IS '회원 이름';
COMMENT ON COLUMN public.member.password IS '단방향 해시로 저장한 비밀번호';
COMMENT ON COLUMN public.member.email IS '회원 이메일 주소';
COMMENT ON COLUMN public.member.joined_at IS '회원가입 일시';
COMMIT;
