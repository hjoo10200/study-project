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

-- update와 delete는 where 조건이 필수(안쓰면 전체가 바뀌거나 삭제되며 복원이 사실상 불가능하다)

commit;

--------------------------------------------------------------------------------------

update product

set price = price + 100

where price <=2000 --<,>,<=,>=,==,!=

;

commit;
----------------------------------------------------------------------------------------
-- NULL 값을 수정하거나 조건으로 사용

update MEMBER
set email = null
where member_id='user1';
commit;


update MEMBER
set email='abc@mycompany.com'
where email is null;
commit;

----------------------------------------------------------------------------------------
-- 날짜를 조건으로해서 날짜를 수정

update MEMBER
set JOINED_AT = '2025-01-05'
where JOINED_AT < '2025-01-05';
commit;