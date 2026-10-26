-- PostgreSQL: 원래 가격을 백업하고 가장 가까운 정수로 반올림합니다.
BEGIN;
SET LOCAL lock_timeout = '10s';
LOCK TABLE public.order_item IN ACCESS EXCLUSIVE MODE;

-- 이미 백업이 존재하면 중단하여 기존 원본을 덮어쓰지 않습니다.
CREATE SCHEMA IF NOT EXISTS migration_backup;
CREATE TABLE migration_backup.order_item_unit_price_009 AS
SELECT order_id, product_id, unit_price FROM public.order_item;
ALTER TABLE migration_backup.order_item_unit_price_009
    ADD PRIMARY KEY (order_id, product_id);
COMMENT ON TABLE migration_backup.order_item_unit_price_009
    IS '009 마이그레이션 이전 주문 단가 원본';

ALTER TABLE public.order_item
    ALTER COLUMN unit_price TYPE INTEGER USING round(unit_price)::integer;

DO $verify$
BEGIN
    IF EXISTS (
        (SELECT order_id, product_id, unit_price FROM public.order_item
         EXCEPT ALL
         SELECT order_id, product_id, round(unit_price)::integer
         FROM migration_backup.order_item_unit_price_009)
        UNION ALL
        (SELECT order_id, product_id, round(unit_price)::integer
         FROM migration_backup.order_item_unit_price_009
         EXCEPT ALL
         SELECT order_id, product_id, unit_price FROM public.order_item)
    ) THEN
        RAISE EXCEPTION '변경된 주문 단가가 원본의 반올림 결과와 일치하지 않습니다.';
    END IF;
END;
$verify$;
COMMIT;
