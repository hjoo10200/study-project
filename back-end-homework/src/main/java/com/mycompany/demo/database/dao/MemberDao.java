package com.mycompany.demo.database.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.mycompany.demo.database.dto.Pager;
import com.mycompany.demo.database.entity.Member;
/**
 * member 테이블의 CRUD를 선언하여 데이터 접근 역할을 분리하는 인터페이스이다.
 * MyBatis는 @Mapper 스캔으로 구현 프록시를 등록하고, 메서드에 매핑된 SQL을 실행한다.
 */
@Mapper
public interface MemberDao {

    //Insert: 데이터 저장 메소드(C)
    int insert(Member member);  // 한 회원의 여러 필드 값을 객체로 전달한다. 반환값은 삽입된 행 수이다.

    // Select: 기본키로 조회하는 메소드(R)
    Member selectById(@Param("memberId") String memberId); // 기본키 값 하나를 전달한다. @Param의 이름은 SQL의 #{memberId}와 연결된다.

    //조건에 해당하는 행수를 반환하는 메소드
    int selectCount(@Param("where") Map<String,Object> where);  

    // 검색 조건(where)에 맞는 행 중 한 페이지를 조회한다.
    // 전체 건수(selectCount)와 같은 조건을 사용해야 페이지 수와 목록이 일치한다.
    List<Member> selectPage(@Param("pager") Pager pager, @Param("where") Map<String, Object> where);

    // Update: 주어진 값으로 수정하는 메소드(U)
    int update(Member member);
    
    // Delete: 기본키로 삭제하는 메소드(D)
    int deleteById(String memberId);
}
