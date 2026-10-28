---
name: mybatis-dao
description: Java Spring MyBatis DAO 인터페이스와 연결된 XML 매퍼를 생성하거나 수정할 때 사용한다. MemberDao의 CRUD, Entity 입출력, 기본키 조회, 검색 건수 및 Pager 기반 목록 조회 패턴을 모든 도메인에 맞게 일반화한다. JPA Repository 작성에는 적용하지 않는다.
---

# MyBatis DAO 작성

## 관련 스킬 참조

- 이 스킬의 호출 이름은 `$mybatis-dao`다.
- DAO 호출에 맞춰 서비스 생성·수정이 필요한 범위에서는 [spring-service](../spring-service/SKILL.md)를 읽는다.
- 컨트롤러의 요청 바인딩·DTO 변환·응답 변경이 필요한 범위에서는 [spring-controller](../spring-controller/SKILL.md)를 읽는다.
- 회원아이디 입력 검증 규칙이 작업 범위에 포함된 경우에만 [member-id-validation](../member-id-validation/SKILL.md)을 읽는다. 해당 검증을 DAO의 책임으로 옮기지 않는다.
- 다른 계층의 스킬 참조는 프로젝트 전체 수정이나 실제 DB 변경에 대한 추가 권한을 뜻하지 않는다.

## 참조와 적용 범위

사용자가 지정한 참조는 `C:/gen-ai-course/projects/3.full-stack/database/dao/MemberDao.java`다. backend의 `src/main/java/com/mycompany/demo/database/dao/MemberDao.java`와 `src/main/resources/mybatis/mapper/MemberMapper.xml`도 프로젝트 연결 방식을 확인할 때 참고한다. 경로가 없거나 프로젝트가 다르면 같은 역할의 DAO·매퍼를 찾아 실제 패키지와 설정에 맞춘다.

참조에서 재사용할 구조는 `@Mapper` 인터페이스, Entity 기반 저장·수정, 기본키 조회·삭제, 조건에 맞는 건수, Pager와 조건을 받는 목록 조회다. `Member`, 문자열 ID, 테이블명, 검색 키를 다른 도메인에 그대로 복사하지 않는다.

DAO는 DB 접근 계약을 정의한다. HTTP Request/Response DTO 변환이나 응답 메시지를 DAO에 넣지 않는다. DAO 작성 요청만으로 서비스·컨트롤러 전체를 바꾸거나 실제 DB에 DDL·DML을 실행하지 않는다.

## 작성 전에 확인할 사항

- 실제 Entity의 필드와 타입, 테이블 컬럼, PK·복합키, IDENTITY/시퀀스 등 키 생성 방식과 FK를 확인한다. ID 타입을 이름만 보고 추정하지 않는다.
- DAO·XML 위치, mapper 스캔, typeAlias, snake_case 컬럼과 camelCase 필드 매핑, 사용 DB와 Pager의 getter를 확인한다.
- 기존 호출부에서 사용하는 메서드명·인자·반환형을 확인한다. 메서드를 변경한다면 요청 범위의 호출부와 XML도 함께 맞춘다.
- 현재 프로젝트는 PostgreSQL 설정이지만 다른 프로젝트나 향후 설정도 확인한다. Oracle 문법을 무조건 적용하지 않는다.

## DAO 계약

- `*Dao` 이름의 인터페이스에 `@Mapper`를 붙인다. Entity는 해당 도메인의 영속 모델을 사용한다.
- 기본 CRUD 이름과 타입은 아래 패턴을 따른다. 요청한 기능에 필요한 메서드만 구현하고, SQL에 연결되지 않는 선언을 무조건 추가하지 않는다.

| 작업 | 메서드 형태 | 의미 |
| --- | --- | --- |
| 저장 | `int insert(Entity entity)` | 영향받은 행 수 반환 |
| 단건 조회 | `Entity selectById(@Param("실제Id명") IdType id)` | PK로 조회, 없으면 null |
| 건수 | `int selectCount(@Param("where") Map<String, Object> where)` | 검색 조건에 해당하는 전체 건수 |
| 페이지 조회 | `List<Entity> selectPage(@Param("pager") Pager pager, @Param("where") Map<String, Object> where)` | 해당 페이지의 Entity 목록 |
| 수정 | `int update(Entity entity)` | 영향받은 행 수 반환 |
| 삭제 | `int deleteById(@Param("실제Id명") IdType id)` | 영향받은 행 수 반환 |

- 예시의 `Entity`, `IdType`, `실제Id명`은 설명용이다. 실제 생성 파일에는 도메인의 클래스명·ID 타입·필드명을 사용한다.
- 기본키가 숫자면 Entity와 DB 범위에 맞는 `long`/`Long` 등을 사용한다. 복합키면 각 구성 요소를 모두 받는 명명된 인자 또는 기존 키 객체를 사용한다.
- 신규 ID 단건 메서드에는 명시적인 `@Param`을 사용해 XML 이름을 안정적으로 맞춘다. 기존에 어노테이션 없이 동작하는 단일 스칼라 인자는 무관한 수정에서 일괄 변경하지 않는다.
- 여러 인자를 받을 때는 각각 `@Param`으로 이름을 붙인다. `param1`, `param2` 같은 위치 기반 이름에 의존하지 않는다.
- `where`에는 허용하는 검색 키와 일치·부분 검색 의미를 문서화한다. null이면 전체 행을 대상으로 하며, 빈 조건도 같은 의미로 처리한다.
- 목록 반환 타입은 `List<해당 Entity>`다. 정상적으로 검색 결과가 없으면 빈 목록을 반환한다.

## Entity 파라미터와 XML 경로

단일 Entity를 받는 신규 DAO는 참조처럼 `int insert(Product product)`, `int update(Product product)` 형태를 기본으로 한다. 기존 DAO가 `@Param("product")`를 사용한다면 유지하고 매퍼 경로를 맞춘다.

| DAO 선언 | XML 값 참조 | 생성 ID 저장 경로 |
| --- | --- | --- |
| `insert(Product product)` | `#{productName}`, `#{sellerId}` | `keyProperty="productId"` |
| `insert(@Param("product") Product product)` | `#{product.productName}`, `#{product.sellerId}` | `keyProperty="product.productId"` |
| `selectById(@Param("productId") Long id)` | `#{productId}` | 해당 없음 |
| `selectPage(@Param("pager") Pager pager, @Param("where") Map<String, Object> where)` | `#{pager.rowsPerPage}`, `#{where.productName}` | 해당 없음 |

동일한 문장에서 최상위 속성과 객체 접두사를 섞지 않는다. 생성 ID는 insert의 `int` 반환값이 아니라 전달한 Entity의 ID 필드에 저장된다.

## XML 매퍼 연결

- `<mapper namespace>`는 DAO의 완전한 클래스명과 같고, statement `id`는 메서드명과 같아야 한다. XML 또는 SQL 어노테이션 중 하나로 실제 구현이 연결되어야 한다. 같은 이름의 DAO 메서드를 오버로드해 매핑을 모호하게 만들지 않는다.
- 조회는 실제 Entity 또는 등록된 alias를 `resultType`으로 지정한다. `selectCount`는 `int`/`_int` 등 건수 타입을 사용한다. 결과 규모가 int 범위를 넘는 요구가 있으면 건수 반환형·서비스·Pager도 함께 검토한다.
- `<insert>`, `<update>`, `<delete>`에는 `resultType`을 붙이지 않는다. `parameterType`을 생략하거나 사용하는 경우에도 실제 MyBatis 인자 구조와 alias를 맞춘다.
- SQL에는 실제 컬럼명을, `#{...}`에는 Java 필드·명명된 파라미터를 사용한다. UPDATE·DELETE의 PK 조건은 대상 행을 정확히 제한해야 한다.
- 값은 `#{...}`로 바인딩한다. `${...}`로 요청 값을 SQL에 직접 삽입하지 않는다. 동적 정렬 컬럼이 필요하면 허용 목록으로 선택한다.
- 검색 건수와 목록 조회에는 같은 조건을 적용한다. `<where>`와 null·빈 문자열 검사로 불필요한 WHERE/AND 및 null 조건 접근 오류를 방지한다. 필요하면 `<sql>`과 `<include>`로 조건을 공유한다.
- 페이지 조회는 PK 등 유일한 기준을 포함해 결정적으로 정렬한 후 제한한다. PostgreSQL에서는 기존 Pager에 맞게 `LIMIT #{pager.rowsPerPage} OFFSET #{pager.startRowIndex}`를 사용할 수 있다. Oracle이라면 실제 버전에 맞는 OFFSET/FETCH 또는 ROWNUM 방식을 선택한다.
- 자동 생성 PK는 생성 전략에 맞게 처리한다. PostgreSQL IDENTITY는 INSERT에서 PK를 제외하고 JDBC 생성 키를 사용할 수 있다. Oracle 시퀀스/IDENTITY 등은 현재 드라이버와 DB 방식에 맞춰 `selectKey` 또는 생성 키 설정을 결정한다. 키를 임의의 MAX(id)+1 방식으로 만들지 않는다.
- Entity 필드에 값이 없어도 DB 기본값이 적용되는지 확인한다. 컬럼에 명시적으로 null을 넣는 것과 INSERT에서 컬럼을 생략하는 것은 다를 수 있다.
- `mapUnderscoreToCamelCase` 또는 기존 `resultMap`으로 컬럼과 Entity 필드를 맞춘다. 관련 없는 설정을 전역 변경하지 않는다.

## 검증과 결과 보고

- DAO 선언·XML namespace/id·바인딩 경로·호출부·키 반환을 대조한다. PK 타입과 복합키 구성, 건수/목록 조건 일치도 확인한다.
- 프로젝트 wrapper로 전체 빌드를 실행한다. Gradle은 `gradlew.bat build`, Maven은 기존 프로젝트 명령을 사용한다. 빌드 실패가 요청 변경과 무관하면 해당 위치와 한계를 구분해 보고한다.
- Java 컴파일 성공만으로 XML 파싱이나 SQL 실행이 검증됐다고 말하지 않는다. 기존 관련 테스트가 있으면 실행하고, 필요한 경우 mock 또는 롤백 가능한 테스트로 실제 바인딩·페이징 경계를 검증한다. 검증을 위해 사용자의 DB 데이터를 임의로 변경하지 않는다.
- 변경 파일과 처리한 계약, 수행한 검사, 미검증 DB 실행 여부를 짧게 보고한다.
