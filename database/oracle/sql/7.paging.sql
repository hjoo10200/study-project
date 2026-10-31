-- product_id가 10 이하인 게시물을 게시물 번호 내림차순으로 정렬하여 페이징합니다(OFFSET/FETCH는 Oracle 12c 이상).
-- 페이지 번호: 1, 페이지당 행 수: 10
-- 건너뛸 행 수 = (페이지 번호 - 1) * 페이지당 행 수
SELECT board_id, title, content, writer, writed_at, product_id
FROM board
where PRODUCT_ID<=10
ORDER BY board_id desc -- 유일한 PK로 정렬하여 같은 값 사이의 순서도 확정한다. 번호 내림차순이며 작성 시각순을 보장하는 것은 아니다.
OFFSET (1 - 1) * 10 ROWS 
FETCH NEXT 10 ROWS ONLY;

-- ROWNUM을 이용한 페이징 (Oracle 11g 이하에서도 사용 가능)
-- 페이지 번호: 1, 페이지당 행 수: 10, 페이징 대상: board 전체 행
-- 먼저 정렬한 뒤 ROWNUM을 부여하고, 마지막으로 페이지 시작 범위를 적용합니다.
-- 마지막 행 번호 = 페이지 번호 * 페이지당 행 수
-- 건너뛸 행 수 = (페이지 번호 - 1) * 페이지당 행 수
SELECT board_id, title, content, writer, writed_at, product_id
FROM (
    SELECT sorted_board.*, ROWNUM AS row_num
    FROM (
        SELECT board_id, title, content, writer, writed_at, product_id
        FROM board
        ORDER BY board_id DESC
    ) sorted_board
    WHERE ROWNUM <= 1 * 10
)
WHERE row_num > (1 - 1) * 10
ORDER BY row_num;
