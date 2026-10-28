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
    int insert(Member member);  //2개이상의 데이터가 반영될때는 매개변수로 엔티티

    // Select: 기본키로 조회하는 메소드(R)
    Member selectById(@Param("memberId") String memberId); //하나의 데이터가 반영될때는 매개변수로 컬럼

    //조건에 해당하는 행수를 반환하는 메소드
    int selectCount(@Param("where") Map<String,Object> where);  

    // SelectAll:전체 데이터를 가지고 오는 메소드(R)
    // 그러나 실제 데이터베이스의 데이터는 엄청나게 많을테니 전체조회는 비효율적이다.
    //  매개변수로 페이지 및 조건을 정의해서 메소드 선언해야한다. 
    List<Member> selectPage(@Param("pager") Pager pager, @Param("where") Map<String, Object> where);

    // Update: 주어진 값으로 수정하는 메소드(U)
    int update(Member member);
    
    // Delete: 기본키로 삭제하는 메소드(D)
    int deleteById(String memberId);
}
