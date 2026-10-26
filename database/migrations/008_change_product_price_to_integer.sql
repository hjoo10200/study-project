-- PostgreSQL: 상품 가격을 값 손실 없이 정수 타입으로 변경합니다.
BEGIN;
SET LOCAL lock_timeout = '10s';
LOCK TABLE public.product IN ACCESS EXCLUSIVE MODE;

DO $verify$
BEGIN
    IF EXISTS (
        SELECT 1 FROM public.product
        WHERE price <> trunc(price)
           OR price < -2147483648 OR price > 2147483647
    ) THEN
        RAISE EXCEPTION '상품 가격에 소수 또는 INTEGER 범위 밖의 값이 있습니다.';
    END IF;
END;
$verify$;

ALTER TABLE public.product ALTER COLUMN price TYPE INTEGER USING price::integer;
COMMIT;
