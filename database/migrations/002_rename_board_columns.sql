-- PostgreSQL: 후기 컬럼명 변경 (기존 데이터와 제약조건 유지)
BEGIN;
ALTER TABLE public.board RENAME COLUMN bno TO board_id;
ALTER TABLE public.board RENAME COLUMN btitle TO title;
ALTER TABLE public.board RENAME COLUMN bcontent TO content;
ALTER TABLE public.board RENAME COLUMN bwriter TO writer;
ALTER TABLE public.board RENAME COLUMN bdate TO date;
COMMIT;
