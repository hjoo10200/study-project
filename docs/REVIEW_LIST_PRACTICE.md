# 리뷰 게시판 목록 복습 순서

## 작업 범위

- 백엔드: `back-end-homework`
- 프론트엔드: `front-end-homework`
- 참고 프로젝트: `backend`, `front-end` (참고만 하고 수정하지 않기)
- 이번 목표: 목록 조회와 페이징. 등록·상세·수정·삭제는 이후 실습한다.
- 원본 구현을 보고 직접 작성할 Java 코드와 SQL 본문은 미리 완성하지 않는다.

## 준비된 파일과 확인할 점

- `database/entity/Review.java`, `database/dao/ReviewDao.java`: 이미 존재하므로 새로 만들지 않는다.
- `database/dto/Pager.java`: 기존 페이징 계산을 재사용한다.
- `mybatis/mapper/ReviewMapper.xml`: 기존 BoardMapper를 리뷰용으로 교체한 틀이다. SQL은 직접 작성한다.
- `mybatis/mybatis_config.xml`: `review` 별칭이 Review 클래스를 가리키도록 연결했다.
- 회원·상품 Mapper는 원본을 참고할 수 있도록 채워져 있다.
- `DatabaseController.listMember()`는 건수 조회 → Pager 생성 → 페이지 조회 → 응답 흐름의 참고 예제다.
- `di/service/BoardService.java`는 DI 실습용이다. 리뷰 DB 조회 서비스로 사용하지 않는다.

## 백엔드 작성 순서

Java 경로는 `src/main/java/com/mycompany/demo/`, 리소스 경로는 `src/main/resources/`를 기준으로 한다.

### 01. application.properties

파일: `application.properties`

할 일:
- 기존 PostgreSQL·MyBatis 설정 확인.
- DB는 localhost:5432/postgres, 웹 서버는 81번 포트다.
- 실습 데이터가 있는지 확인한다.

참고: homework의 기존 설정

### 02. database/entity/Review.java

파일: `database/entity/Review.java`

할 일:
- 기존 필드를 원본과 비교한다.
- 특히 `reviewIdId`는 `reviewId`, `writeAt`은 `writedAt`과 이름이 다른 점을 확인하고 직접 맞춘다.

참고: backend의 `Review.java`

### 03. database/dto/Pager.java

파일: `database/dto/Pager.java`

할 일:
- 기존 파일을 읽고 rowsPerPage, pageNo, startRowIndex의 역할을 확인한다.

참고: 기존 파일 재사용

### 04. database/dao/ReviewDao.java

파일: `database/dao/ReviewDao.java`

할 일:
- 기존 selectCount, selectPage 선언과 `@Param("where")`, `@Param("pager")` 이름을 확인한다.

참고: backend의 `ReviewDao` (현재 원본 파일은 controller 폴더에 있지만 선언된 패키지는 database.dao)

### 05. mybatis/mapper/ReviewMapper.xml

파일: `mybatis/mapper/ReviewMapper.xml`

할 일:
- searchCondition, selectCount, selectPage를 직접 작성한다.
- 건수와 목록에 같은 조건을 적용하고, 정렬과 LIMIT/OFFSET을 연결한다.
- 다른 CRUD SQL은 이후 실습한다.

참고: backend의 `ReviewMapper.xml`

### 06. database/dto/ReviewListItemResponse.java

파일: `database/dto/ReviewListItemResponse.java`

할 일:
- 목록에 보낼 reviewId, title, writer, writedAt, productId, fileName을 선언한다.

참고: backend의 동명 DTO

### 07. database/service/ReviewService.java

파일: `database/service/ReviewService.java`

할 일:
- 건수 조회와 페이지 목록 조회 메소드를 작성한다.
- 기존 DAO를 주입받아 호출한다.

참고: backend의 동명 서비스

### 08. database/controller/ReviewController.java

파일: `database/controller/ReviewController.java`

할 일:
- GET /review/list를 작성한다.
- pageNo 기본값, 전체 건수, Pager, 목록 조회, 응답 DTO 변환, data/pager 반환 순으로 구현한다.

참고: backend의 동명 컨트롤러 및 homework의 DatabaseController.listMember()

### 09. conf/CorsConfig.java

파일: `conf/CorsConfig.java`

할 일:
- 실제 프론트 주소에서 API에 접근하도록 CORS를 설정한다.

참고: backend의 동명 설정

빈 SQL 틀은 해당 기능을 완성하기 전에는 호출하지 않는다. 현재 원본과 homework 모두 `review` 테이블을 기준으로 맞추며
Board의 필드명을 섞지 않는다.

## 백엔드 확인

브라우저 또는 API 도구로 `http://localhost:81/review/list?pageNo=1`을 조회한다.

- HTTP 200으로 응답하는가?
- `data`에 목록 항목이 있고 `pager`에 페이지 정보가 있는가?
- 1페이지와 2페이지의 데이터가 다른가?
- 첨부 없는 게시물의 fileName이 null이어도 정상인가?
- 조건 검색을 넣었다면 전체 건수와 목록이 같은 조건을 사용하는가?

## 프론트엔드 작성 순서

아래 파일은 `front-end-homework` 기준이다.

### 10. package.json

파일: `package.json`

할 일:
- homework에 아직 없는 axios 의존성을 설치한다.

참고: front-end의 package.json

### 11. apis/axios.js

파일: `apis/axios.js`

할 일:
- Axios 인스턴스를 만들고 homework 백엔드 주소 `http://localhost:81`을 지정한다.
- 원본의 8080 포트를 그대로 복사하지 않는다.

참고: front-end의 동명 파일

### 12. apis/reviewApi.js

파일: `apis/reviewApi.js`

할 일:
- getReviewList(pageNo)에서 GET /review/list를 호출하고 pageNo를 params로 전달한다.

참고: front-end의 동명 파일

### 13. app/Ch8RestAPI/Exam01Review/page.js

파일: `app/Ch8RestAPI/Exam01Review/page.js`

할 일:
- 기존 기본 템플릿을 확장한다.
- reviews, pager, pageNo 상태 → useEffect 조회 → 응답 저장 → 표 출력 → 페이지 버튼 순으로 작성한다.

참고: front-end의 같은 페이지, homework의 Ch4LifeCycle·Ch2Component/Exam08Repeat

### 14. app/AppMenu.js

파일: `app/AppMenu.js`

할 일:
- 기존 Exam01Review 메뉴 연결을 확인한다.
- 이미 연결되어 있다면 중복 추가하지 않는다.

참고: homework의 기존 메뉴

## 최종 확인

- 목록에 번호·제목·작성자·작성일·상품 번호·첨부 여부가 표시되는가?
- 페이지 버튼 클릭 시 pageNo 변경 → 재조회 → 목록 변경으로 이어지는가?
- 데이터가 없을 때 빈 목록 안내가 표시되는가?
- 렌더링 본문에서 API를 직접 호출해 반복 요청이 발생하지 않는가?
- 개발자 도구 Network에서 요청이 81번 포트로 가는가?

현재 단계에서는 원본의 상세·등록·수정·삭제 기능까지 복사하지 않는다.
