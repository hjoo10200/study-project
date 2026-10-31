package com.mycompany.demo.database.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mycompany.demo.database.entity.Member;
import com.mycompany.demo.database.dao.MemberDao;
import com.mycompany.demo.database.dto.Pager;

import lombok.extern.slf4j.Slf4j;

@Service()
@Slf4j 
public class MemberService {
    //필드 선언
    private final MemberDao memberDao ;

    // Spring이 생성자 매개변수로 MyBatis의 MemberDao 구현 프록시를 주입한다.
    public MemberService(MemberDao memberDao){
        this.memberDao = memberDao;
    }

    //메소드 선언
    public Member getMember(String memberId) {
        Member member= memberDao.selectById(memberId);
        return member;
    }   

    // 현재는 password를 별도 해시 변환 없이 INSERT한다. 암호화 라이브러리를 추가하는 것만으로 해시 저장이 적용되지는 않는다.
    public int join(Member member){
        return memberDao.insert(member);

    }

    public int updateMember(Member member){
        int rows = memberDao.update(member);
        return rows;
    }

    public int deleteMember(String memberId) {
        int rows = memberDao.deleteById(memberId);
        return rows;
    }

    public int pagingTotalRows(Map<String, Object> where) {
       return memberDao.selectCount(where);
    }

    public List<Member> listMember(Pager pager, Map<String, Object> where) {
     List<Member> list= memberDao.selectPage(pager, where);    

        return list;}
    }

