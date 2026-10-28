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

    // 생성자를 통해서 MemberDao 선언
    public MemberService(MemberDao memberDao){
        this.memberDao = memberDao;
    }

    //메소드 선언
    public Member getMember(String memberId) {
        Member member= memberDao.selectById(memberId);
        return member;
    }   

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

