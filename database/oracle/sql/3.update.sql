update member 
set 
    member_name='홍길남',
    password='abc54321'

where 
    --member_id='user225';
    -- member_ID like 'user10%'
    -- member_id like '%user10%' and email='user1000@sample.example'
    member_id like '%user20%' or email='user1000@sample.example'
    ;

-- UPDATE와 DELETE에서 WHERE는 문법상 선택 사항이지만, 생략하면 모든 행이 대상이다. 자동 커밋이 꺼져 있고 아직 COMMIT 전이면 ROLLBACK할 수 있다.

commit;

--------------------------------------------------------------------------------------

update product

set price = price + 100

where price <=2000 -- 비교 연산자: <, >, <=, >=, =, <>(같지 않음). SQL의 같음 비교는 ==가 아니라 =이다.

;

commit;
----------------------------------------------------------------------------------------
-- NULL은 값이 없거나 알 수 없음을 뜻한다. 조건에는 = NULL 대신 IS NULL 또는 IS NOT NULL을 사용한다.

update MEMBER
set email = null
where member_id='user1';
commit;


update MEMBER
set email='abc@mycompany.com'
where email is null;
commit;

----------------------------------------------------------------------------------------
-- 날짜 조건으로 날짜를 수정한다. 아래 문자열은 DATE로 암시적 변환되어 NLS_DATE_FORMAT에 의존하므로, 명확하게 쓰려면 DATE '2025-01-05'를 사용한다.

update MEMBER
set JOINED_AT = '2025-01-05'
where JOINED_AT < '2025-01-05';
commit;