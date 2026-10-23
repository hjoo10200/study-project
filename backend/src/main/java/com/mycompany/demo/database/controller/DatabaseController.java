package com.mycompany.demo.database.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mycompany.demo.database.dao.MemberDao;
import com.mycompany.demo.database.dto.Pager;
import com.mycompany.demo.database.entity.Member;

import lombok.extern.slf4j.Slf4j;


@RestController 
@RequestMapping ("/database")
@Slf4j 
public class DatabaseController {

    @Autowired 
    private MemberDao memberDao;


    @GetMapping("/getmember")
    public Member getMember() {
        Member member = memberDao.selectById("spring1");
        return member;
    }
    

    @PostMapping("/joinmember")
    public Member joinMember(@RequestBody Member member) {
        //DB 저장
        memberDao.insert(member);
        //DB 저장된 회원정보가져옴
        Member dbMember = memberDao.selectById(member.getMemberId());
        return dbMember;
    }


    @PutMapping("/updatemember")
    public Member updateMember(@RequestBody Member member) {
    
        //DB 저장된 회원정보가져옴
        Member dbMember = memberDao.selectById(member.getMemberId());

        //수정된 값으로 대체
        dbMember.setEmail(member.getEmail());
        dbMember.setPassword(member.getPassword());

        //DB에 반영
        memberDao.update(dbMember);

        //DB에 저장된 회원 정보가져오기
        dbMember = memberDao.selectById(member.getMemberId());
        return dbMember;
    }

    @DeleteMapping("/deletemember")
    public String deleteMember(@RequestParam("memberId") String memberId) {
        int rows= memberDao.deleteById(memberId);
        if(rows==1){
            return "회원 삭제 성공";
        }else {
            return "회원 삭제 실패";
        }
    }

    @GetMapping("listmember")
    public Map<String,Object> listMember(@RequestParam("pageNo") int pageNo){
        Map<String,Object> where = Map.of("memberName","김");
        int totalRows = memberDao.selectCount(where);
        Pager pager = new Pager(10, 5, totalRows, pageNo);
        List<Member> list = memberDao.selectPage(pager, where);
        Map<String,Object> map = new HashMap<>();
        map.put("pager",pager);
        map.put("data",list);
        return map;
    }
}
