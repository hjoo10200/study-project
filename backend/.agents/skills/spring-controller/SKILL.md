---
name: spring-controller
description: Java Spring REST Controller를 생성하거나 수정할 때 MemberController의 생성자 주입, HTTP 매핑, Request DTO와 Entity 변환, Response DTO, status/data Map 응답 및 Pager 기반 목록 조회를 모든 도메인에 맞게 적용한다.
---

# Spring REST Controller 작성

## 관련 스킬 참조

- 이 스킬의 현재 호출 이름은 `$spring-controller`다. 이전 이름 `controller-dto-entity` 대신 이 이름을 사용한다.
- 서비스 생성·수정이 필요한 범위에서는 [spring-service](../spring-service/SKILL.md)를 읽어 주입과 서비스 계약을 맞춘다.
- DAO·XML 매퍼 변경이 필요한 범위에서는 [mybatis-dao](../mybatis-dao/SKILL.md)를 읽어 파라미터와 매핑을 맞춘다.
- 회원아이디 검증 규칙 적용·검토를 요청받은 경우에만 [member-id-validation](../member-id-validation/SKILL.md)을 읽는다. 일반 컨트롤러 작업만으로 해당 업무 규칙을 새로 강제하지 않는다.
- 관련 스킬은 해당 작업이 실제 범위에 포함될 때만 읽고 적용한다. 사용자 지시와 기존 API 계약을 우선한다.

## 참조와 적용 범위

참조는 `src/main/java/com/mycompany/demo/database/controller/MemberController.java` 전체다. 단건 조회, 가입, 수정, 삭제, 페이지 목록의 요청과 응답 흐름을 분석해 실제 도메인에 적용한다. 연결된 `MemberService`, `JoinMemberRequest`, `UpdateMemberRequest`, `MemberResponse`, `Pager`도 필요한 만큼 확인한다. 경로가 이동했으면 같은 역할의 코드를 찾는다.

회원이라는 이름, 문자열 ID, `/database`, URL 철자나 특정 검색값을 다른 도메인에 그대로 복사하지 않는다. 기존 코드를 수정할 때는 사용자가 요청하지 않은 URL·HTTP 메서드·JSON 키·상태 코드·응답 타입을 불필요하게 변경하지 않는다. 스킬 생성이나 분석 요청 자체를 애플리케이션 전체 수정 요청으로 해석하지 않는다.

## 기본 구조와 역할

- 해당 도메인의 `*Controller` 클래스에 `@RestController`를 붙이고, 프로젝트의 기존 경로 체계에 맞게 클래스의 `@RequestMapping`과 메서드 매핑을 정한다.
- 필요한 서비스를 `private final` 필드로 선언하고 생성자 주입한다. 참조처럼 명시적 생성자를 사용하거나 기존 프로젝트의 Lombok 생성자 방식을 유지한다. 클래스·생성자·주입 타입의 철자와 import를 확인한다.
- 컨트롤러는 요청 바인딩, Request DTO → Entity 변환, 서비스 호출, Entity → Response DTO 변환과 HTTP 응답 구성을 담당한다. DAO를 직접 호출하거나 SQL·트랜잭션·핵심 업무 처리를 컨트롤러에 넣지 않는다.
- `@Slf4j`는 로그가 필요할 때만 사용한다. 비밀번호·토큰 등 민감한 값과 이를 포함한 객체 전체를 로그로 출력하지 않는다.

## 요청 데이터와 서비스 전달

- 회원가입·상품등록·정보수정처럼 여러 업무 필드를 받는 요청은 `*Request` DTO로 받는다. Entity를 HTTP 요청 본문으로 직접 바인딩하지 않는다.
- JSON 본문은 `@RequestBody XxxRequest`로 받는다. GET 검색 조건을 DTO로 받는 경우 `@ModelAttribute XxxRequest`를 사용한다. DTO의 기본 생성자·접근자 등 실제 Spring 바인딩 지원을 확인한다.
- 참조의 단건 조회·삭제처럼 단순 ID는 `@RequestParam("실제Id명")`으로 직접 받을 수 있다. 기존 경로가 경로 변수 방식이면 `@PathVariable`을 유지한다. 사용자 요청이 `pageNo`만 받는 방식이면 불필요한 검색 DTO를 강제하지 않는다.
- Request DTO는 Entity로 변환해서 서비스에 전달한다. 서비스에 HTTP Request/Response DTO를 넘기지 않는다. 기존 서비스가 단순 ID, Pager, 검색 Map을 받는 계약은 유지할 수 있으며, 이 스킬을 이유로 전부 Entity 인자로 변경하지 않는다.
- Entity를 생성자로 만들 때 필드 순서와 전체 인자 수를 실제 클래스에서 확인한다. 일부 필드만 매핑하면 기본 생성자·setter를 사용할 수 있다. 서버가 정하는 ID·가입일 등의 필드를 요청에서 임의로 덮어쓰지 않는다.
- Java의 ID 타입을 서비스와 맞춘다. `long`과 `Long`, 숫자 리터럴, 문자열 변환을 구분한다. 요청 파라미터명과 Java 변수명의 대소문자도 확인한다.
- JSON을 받는 엔드포인트를 폼 요청으로 바꾸거나 기존 쿼리 파라미터를 JSON 본문으로 임의 변경하지 않는다. 사용자가 명시적으로 형식을 지정하면 그 요청을 따른다.
- 기존 입력 검증 규칙이 있으면 Request DTO에서 유지하고 `@Valid` 등 실행 여부를 확인한다. 새로운 회원 ID 형식·비밀번호 정책 같은 업무 규칙을 컨트롤러 작업에 임의로 추가하지 않는다.

## 응답 DTO와 Map

- 응답의 업무 데이터는 `*Response` DTO로 변환한다. Entity 자체 또는 Entity 목록을 그대로 반환하지 않는다. 참조의 `MemberResponse`처럼 필요한 필드만 명시적으로 옮기고 비밀번호는 제외한다.
- 참조의 직접 DTO 응답과 `Map<String, Object>` 봉투 응답 모두 사용할 수 있다. 사용자가 Map을 원하거나 기존 계약이 Map이면 이를 별도 봉투 DTO로 바꾸지 않는다. Map 안의 `data` 값도 Entity가 아니라 Response DTO 또는 그 목록이다.
- 응답 변환은 기존 프로젝트처럼 생성자·setter를 사용한다. 반복이 크거나 사용자가 간소화를 요청하면 DTO의 변환 메서드 등을 고려할 수 있지만, 이를 위해 새 매핑 라이브러리를 무조건 도입하지 않는다.
- `dbMember`와 `dbmember`처럼 변수명 대소문자를 섞지 않는다. Response DTO에 없는 setter나 존재하지 않는 생성자를 호출하지 않는다.
- insert·update·delete 서비스 메서드의 반환형은 [spring-service](../spring-service/SKILL.md) 규칙에 따라 모두 int이며 영향받은 행 수를 뜻한다. 등록도 이 규칙을 따르고 반환값을 Entity나 생성된 PK로 해석하지 않는다.
- 저장·수정 후 DB의 기본값 등이 응답에 필요하면 별도 조회 메서드로 저장된 Entity를 재조회한다. 입력 Entity의 null 값을 저장 결과라고 그대로 응답하지 않는다.
- 조회 결과가 null일 때 getter를 호출하지 않는다. 대상 없음은 기존 도메인 예외·404·실패 응답 정책에 맞춰 처리한다. 이미 정해진 정책 없이 모든 오류를 성공 상태 코드와 성공 메시지로 숨기지 않는다.

## CRUD와 페이징 패턴

| 작업 | 참조의 HTTP 처리 | 서비스 연결과 응답 |
| --- | --- | --- |
| 단건 조회 | `@GetMapping`, ID `@RequestParam` | ID로 조회한 Entity를 Response DTO로 변환 |
| 등록 | `@PostMapping`, `@RequestBody *Request` | Entity로 변환해 저장하고 저장 결과를 Response DTO로 반환 |
| 수정 | `@PutMapping`, `@RequestBody *Request` | Entity로 변환해 수정하고 영향 행 수에 따라 Map 응답 |
| 삭제 | `@DeleteMapping`, ID `@RequestParam` | 서비스 삭제 결과 행 수에 따라 Map 응답 |
| 페이지 목록 | `@GetMapping`, 기본값 1인 `pageNo` | 전체 건수와 Pager를 이용해 목록을 조회하고 DTO 목록과 페이지 정보 반환 |

필요한 작업만 구현한다. 모든 컨트롤러에 회원가입·로그인 같은 회원 전용 메서드나 모든 CRUD를 기계적으로 추가하지 않는다.

### 수정·삭제

- 등록·수정·삭제 서비스는 영향받은 행 수를 int로 반환한다. 단건 처리에서 `rows == 1`이면 처리 성공, `rows == 0`이면 처리된 행 없음이다. 기존 요구에 맞춰 `if/else`로 분기할 수 있다.
- 참조의 Map 규약은 성공 시 `"status": "success"`, 실패 시 `"status": "fail"`이다. 수정 성공 응답은 `"data"`에 Response DTO를 넣으며, 삭제 응답에는 상태만 넣을 수 있다. 기존 문자열을 임의로 boolean이나 다른 키로 바꾸지 않는다.
- `Map.of`는 null을 허용하지 않으므로 null 값을 넣을 계약이면 `HashMap` 등을 사용한다. 실패 시 data 키 생략 여부 등 기존 응답 형식을 유지한다.
- 일부 필드 수정에서 새 Entity에 없는 필드가 null로 덮어써지지 않는지 서비스·DAO를 확인한다. 보존·검증 등 업무 처리는 서비스에서 수행한다. 이를 발견했으면 요청 범위에서 필요한 수정만 하고 무관한 도메인 전체를 변경하지 않는다.

### 페이지 목록

- 단순 목록은 `@RequestParam(value = "pageNo", defaultValue = "1") int pageNo` 형태로 받는다. 참조의 기본 페이지당 행 수는 10, 페이지 그룹 크기는 5이며 기존 프로젝트 요구가 다르면 그 값을 따른다.
- 서비스의 검색 건수와 목록 메서드에 동일한 검색 조건을 전달한다. 검색이 없으면 참조처럼 `where = null`을 사용할 수 있다. `getMemberCount` 등 존재하지 않는 메서드명을 추정하지 말고 현재 서비스 시그니처를 확인한다.
- 건수는 조회 대상 전체 행 수다. 그 값과 요청 페이지 번호로 기존 Pager를 만든 후 해당 페이지 목록을 서비스에서 조회한다. 컨트롤러에서 전체 데이터를 읽어 잘라내지 않는다.
- 모든 항목을 `List<도메인Response>`로 변환한다. 참조의 for 문과 ArrayList 방식 또는 기존 프로젝트의 stream 방식을 사용할 수 있다. 반복문 변수와 변환 대상 이름을 일치시킨다.
- 반환 Map은 `"pager"`와 `"data"` 키를 사용하며, data에는 Response DTO 목록을 넣는다. 빈 결과는 빈 목록으로 처리한다.
- 0 이하 페이지 번호로 음수 OFFSET이 생성되지 않도록 기존 검증·오류 처리 방식에 맞춰 처리한다. 빈 결과·페이지 범위 초과 시 Pager 메타데이터도 확인한다.

## 구현과 검증

1. 대상 컨트롤러, 서비스 시그니처, Entity, 요청·응답 DTO와 실제 호출 경로를 읽는다. 기능 추가인지 최소 빌드 수정인지 구분하고 요청 범위만 변경한다.
2. Request 바인딩·Entity 변환·서비스 호출·Response 변환과 Map 구성을 연결한다. 전체 반환 경로, 중괄호·세미콜론, import, 메서드명과 변수명의 대소문자를 확인한다.
3. 프로젝트 wrapper로 전체 빌드를 실행해 메인 코드·테스트 컴파일·기존 테스트를 확인한다. 컴파일 오류 수정만 요청받았다면 이를 빌미로 무관한 HTTP 계약을 재설계하지 않는다.
4. 바인딩·응답 계약이 달라져 추가 검증이 필요하면 기존 방식의 테스트를 사용한다. 예를 들어 MockMvc에서 JSON 응답을 검사할 때 프로젝트가 XML도 지원하면 `Accept: application/json`을 명시한다. 단순 반복 테스트는 무조건 추가하지 않는다.
5. 실제 요청을 검증할 때는 읽기 전용 조회나 mock을 우선한다. 빌드 검증을 이유로 사용자의 DB에 회원 등록·수정·삭제를 임의 실행하지 않는다.
6. 변경 파일, API 호출 예시, 응답 형태, 빌드·테스트 결과 및 실제 DB 실행 여부를 구분해 보고한다. Java 컴파일 통과만으로 실제 API와 SQL 실행까지 검증됐다고 말하지 않는다.
