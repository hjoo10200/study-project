
----------------------------
--member 테이블의 데이터 저장
----------------------------

-- 회원 한 명 삽입: 완전한 컬럼 리스트의 값을 저장함(메모리에만 저장,아직 DB저장x)
insert into member (member_id, member_name, password, email, joined_at)
values ('Hong123', '홍길동', 'test1234', 'hong@example.com', sysdate);
-- 작업내용을 물리적 DB에 반영(미반영시 ROLLBACK)
commit;

-- 컬럼 리스트를 생략
insert into member 
values ('Hong1234', '홍길동', 'test1234', 'hong1@example.com', sysdate);
commit;


-- 기본값을 갖는 컬럼은 생략가능
insert into member (member_id, member_name, password, email)
values ('Hong12345', '홍길동', 'test1234', 'hong2@example.com');
commit;

--NULL을 가질수 있는 컬럼은 생략가능
insert into member (member_id, member_name, password, email)
values ('Hong123456', '홍길동', 'test1234', null);
commit;

insert into member (member_id, member_name, password)
values ('Hong1234567', '홍길동', 'test1234');
commit;

----------------------------
--seller 테이블의 데이터 저장
----------------------------
insert into seller (seller_name, email, phone)
values ('홍길동', 'hong@mycompany.com', '0101231234');
-- 작업내용을 물리적 DB에 반영(미반영시 ROLLBACK)
commit;

-- 컬럼 리스트를 생략
insert into seller (seller_name, email, phone)
values ('홍길서', 'hong2@mycompany.com', '0101231235');
commit;


