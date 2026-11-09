package com.mycompany.demo.database.service;

import java.util.List;
import java.util.Map;

import org.springframework.dao.DuplicateKeyException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.mycompany.demo.database.dao.MemberDao;
import com.mycompany.demo.database.dto.Pager;
import com.mycompany.demo.database.entity.Member;
import com.mycompany.demo.exception.DuplicatedMemberIdException;

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


    public int join(Member member){
        // 비밀번호 암호화
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        member.setPassword(passwordEncoder.encode(member.getPassword()));
        try {
            return memberDao.insert(member);
        } catch (DuplicateKeyException e) {
            throw new DuplicatedMemberIdException("이미 사용 중인 아이디입니다.");
        }

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

    public String login(Member member){
        //DB에서 해당 memberId로 member 가져오기
        Member dbMember = memberDao.selectById(member.getMemberId());
        if(dbMember == null){
            return "wrongMemberId";
        }
        // 암호비교
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        boolean result = passwordEncoder.matches(member.getPassword(),dbMember.getPassword());

        if(!result){
            return "wrongpassword";
        }

        return "success";
    };
    }

