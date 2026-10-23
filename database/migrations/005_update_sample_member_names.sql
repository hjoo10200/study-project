-- PostgreSQL: 테스트 회원 50명의 이름을 가상의 한국어 이름으로 변경
BEGIN;
WITH sample_names AS (
    SELECT 'TestUser' || lpad(ordinality::text, 3, '0') AS member_id,
           member_name
    FROM unnest(ARRAY[
        '김민준', '이서연', '박지호', '최서윤', '정도윤',
        '강하은', '조예준', '윤지우', '장시우', '임하윤',
        '한주원', '오수아', '서도현', '신지아', '권준서',
        '황서현', '안건우', '송예린', '전우진', '홍소율',
        '유현우', '고채원', '문지훈', '양다은', '손민재',
        '배유나', '백승우', '허은서', '남태윤', '심아린',
        '노준혁', '하수빈', '곽서준', '성지유', '차시윤',
        '주나은', '우재윤', '구다인', '민성민', '진소연',
        '지유준', '엄예원', '채정우', '원서영', '천동현',
        '방가은', '공태민', '현수연', '함준영', '변다현'
    ]) WITH ORDINALITY AS names(member_name, ordinality)
)
UPDATE public.member m
SET member_name = n.member_name
FROM sample_names n
WHERE m.member_id = n.member_id;
COMMIT;
