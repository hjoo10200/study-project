package com.mycompany.demo.database.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mycompany.demo.database.dto.JoinMemberRequest;
import com.mycompany.demo.database.dto.MemberResponse;
import com.mycompany.demo.database.dto.Pager;
import com.mycompany.demo.database.dto.UpdateMemberRequest;
import com.mycompany.demo.database.entity.Member;
import com.mycompany.demo.database.service.MemberService;

import lombok.extern.slf4j.Slf4j;



@RestController 
@RequestMapping ("/database")
@Slf4j 
public class MemberController {
    private final MemberService memberService;

    public MemberController(MemberService memberService) {
    this.memberService = memberService;
}


    @GetMapping("/getmember")
    public MemberResponse getMember(@RequestParam("memberId") String memberId) {

        Member member = memberService.getMember(memberId);

        MemberResponse memberResponse = new MemberResponse(
            member.getMemberId(),
            member.getMemberName(),
            member.getEmail(),
            member.getJoinedAt()
        );

    return memberResponse;
}
    @PostMapping("/joinmember")
    public MemberResponse joinmember(@RequestBody JoinMemberRequest joinMemberRequest) {
        Member member = new Member(
            joinMemberRequest.getMemberId(),
            joinMemberRequest.getMemberName(),
            joinMemberRequest.getPassword(),
            joinMemberRequest.getEmail(),
            null
        );
        
        memberService.join(member);

        Member dbMember = memberService.getMember(joinMemberRequest.getMemberId());
        MemberResponse memberResponse = new MemberResponse();
        memberResponse.setMemberId(dbMember.getMemberId());
        memberResponse.setMemberName(dbMember.getMemberName());
        memberResponse.setJoinedAt(dbMember.getJoinedAt());
        memberResponse.setEmail(dbMember.getEmail());
        return memberResponse;
    }

    @PutMapping("/updatemember")
    public Map<String, Object> updateMember(@RequestBody UpdateMemberRequest updateMemberRequest) {
        Member member = new Member();
        member.setMemberId(updateMemberRequest.getMemberId());
        member.setPassword(updateMemberRequest.getPassword());
        member.setEmail(updateMemberRequest.getEmail());

        int rows = memberService.updateMember(member);
        Map<String, Object> map = new HashMap<>();
        if (rows == 1) {
            Member dbMember = memberService.getMember(updateMemberRequest.getMemberId());
            MemberResponse memberResponse = new MemberResponse();
            memberResponse.setMemberId(dbMember.getMemberId());
            memberResponse.setMemberName(dbMember.getMemberName());
            memberResponse.setJoinedAt(dbMember.getJoinedAt());
            memberResponse.setEmail(dbMember.getEmail());
            map.put("status", "success");
            map.put("data", memberResponse);
        } else {
            map.put("status", "fail");
        }
        return map;
    }

    @DeleteMapping("/deletemember")
    public Map<String, Object> deleteMember(@RequestParam("memberId") String memberId){
        int rows = memberService.deleteMember(memberId);
        Map<String, Object> map = new HashMap<>();
        if(rows==1){

            map.put("status", "success");
            return map;
        } else{
            map.put("status", "fail");
            return map;

        }

    }

    @GetMapping("/listmember")
        public Map<String, Object> listmember(@RequestParam(value="pageNo",defaultValue="1") int pageNo) {
        Map<String, Object> where = null; 
        int totalRows= memberService.pagingTotalRows(where);
        Pager pager = new Pager(10,5,totalRows, pageNo);

        List<Member> list= memberService.listMember(pager,where);
        List<MemberResponse> listMemberResponse = new ArrayList<>();
        for (Member dbMember: list) {
            MemberResponse memberResponse = new MemberResponse();
            memberResponse.setMemberId(dbMember.getMemberId());
            memberResponse.setMemberName(dbMember.getMemberName());
            memberResponse.setJoinedAt(dbMember.getJoinedAt());
            memberResponse.setEmail(dbMember.getEmail());

            listMemberResponse.add(memberResponse);

        }
        Map<String, Object> map = Map.of(
            "pager",pager,
            "data", listMemberResponse);
        return map;
    }
    
}
