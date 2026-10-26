-- PostgreSQL: 판매자 연락처 타입 변경. 길이 초과 시 잘라내지 않고 중단합니다.
BEGIN;
SET LOCAL lock_timeout = '10s';
LOCK TABLE public.seller IN ACCESS EXCLUSIVE MODE;
DO $verify$
BEGIN
    IF EXISTS (SELECT 1 FROM public.seller
               WHERE length(phone) > 15 OR length(email) > 254) THEN
        RAISE EXCEPTION '연락처 데이터가 변경할 컬럼 길이를 초과합니다.';
    END IF;
END;
$verify$;
ALTER TABLE public.seller
    ALTER COLUMN phone TYPE VARCHAR(15),
    ALTER COLUMN email TYPE VARCHAR(254);
COMMIT;
