-- PostgreSQL: 회원 이름 추가 및 기존 테스트 회원 이름 설정
BEGIN;
ALTER TABLE public.member ADD COLUMN member_name VARCHAR(100);
UPDATE public.member
SET member_name = '테스트회원' || substring(member_id FROM '[0-9]{3}$')
WHERE member_id ~ '^TestUser[0-9]{3}$';
ALTER TABLE public.member ALTER COLUMN member_name SET NOT NULL;
COMMENT ON COLUMN public.member.member_name IS '회원 이름';
COMMIT;
