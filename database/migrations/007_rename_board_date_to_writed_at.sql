-- PostgreSQL: 게시물 작성 일시 컬럼명을 DBML과 동일하게 변경합니다.
BEGIN;
SET LOCAL lock_timeout = '10s';
ALTER TABLE public.board RENAME COLUMN date TO writed_at;
COMMENT ON COLUMN public.board.writed_at IS '게시물 작성 일시';
COMMIT;
