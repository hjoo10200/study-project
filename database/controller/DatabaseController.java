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

import com.mycompany.demo.database.dao.BoardDao;
import com.mycompany.demo.database.dao.MemberDao;
import com.mycompany.demo.database.dto.Pager;
import com.mycompany.demo.database.entity.Board;
import com.mycompany.demo.database.entity.Member;

import lombok.extern.slf4j.Slf4j;


@RestController 
@RequestMapping("/database")
@Slf4j 
public class DatabaseController {
    @Autowired private MemberDao memberDao;
    @Autowired private BoardDao boardDao;

    @GetMapping("/get-member")
    public Member getMember() {
        // DB에 저장된 회원 정보를 가져오기
        Member member = memberDao.selectById("test_user_001");
        return member;
    }

    @PostMapping("/join-member")
    public Member joinMember(@RequestBody Member member) {
        // DB 저장
        memberDao.insert(member);
        // DB에 저장된 회원 정보를 가져오기
        Member dbMember = memberDao.selectById(member.getMemberId());
        return dbMember;
    }

    @PutMapping("/update-member")
    public Member updateMember(@RequestBody Member member) {
        // DB에 저장된 회원 정보를 가져오기
        Member dbMember = memberDao.selectById(member.getMemberId());
        // 수정된 값으로 대체
        dbMember.setEmail(member.getEmail());
        dbMember.setPassword(member.getPassword());
        // DB에 반영
        memberDao.update(dbMember);
        // DB에 저장된 회원 정보를 가져오기
        dbMember = memberDao.selectById(member.getMemberId());
        return dbMember;
    }

    @DeleteMapping("/delete-member")
    public String deleteMember(@RequestParam("memberId") String memberId) {
        int rows = memberDao.deleteById(memberId);
        if(rows == 1) {
            return "회원 삭제 성공";
        } else {
            return "회원 삭제 실패";
        }
    }

    
    @GetMapping("/list-member")
    public Map<String, Object> listMember(@RequestParam("pageNo") int pageNo) {
        Map<String, Object> where = Map.of("memberName", "테스트회원 00");
        int totalRows = memberDao.selectCount(where);
        Pager pager = new Pager(5, 5, totalRows, pageNo);
        List<Member> list = memberDao.selectPage(pager, where);
        
        Map<String, Object> map = new HashMap<>();
        map.put("pager", pager);
        map.put("data", list);
        return map;
    }

    @PostMapping("/write-board")
    public Board writeBoard(@RequestBody Board board) {
        log.info(board.toString());  // INSERT 전의 요청 값. long의 기본값은 0이지만 요청에 번호가 있으면 그 값이 들어 있다.

        boardDao.insert(board);
        log.info(board.toString());  // 매퍼에 useGeneratedKeys와 keyProperty가 설정되어 있다면 DB가 생성한 번호가 board에 반영된다.

        Board dbBoard = boardDao.selectById(board.getBoardId());
        return dbBoard;
    }
}
