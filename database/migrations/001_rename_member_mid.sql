-- PostgreSQL: 회원 아이디 컬럼명 변경 (기존 데이터와 외래키 유지)
BEGIN;
ALTER TABLE public.member RENAME COLUMN mid TO member_id;
COMMIT;
