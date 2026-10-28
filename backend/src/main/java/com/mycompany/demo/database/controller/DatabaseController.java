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
import com.mycompany.demo.database.dao.SellerDao;
import com.mycompany.demo.database.dto.Pager;
import com.mycompany.demo.database.entity.Board;
import com.mycompany.demo.database.entity.Member;
import com.mycompany.demo.database.entity.Seller;
import lombok.extern.slf4j.Slf4j;


@RestController 
@RequestMapping ("/database")
@Slf4j 
public class DatabaseController {

    @Autowired 
    private MemberDao memberDao;

    @Autowired 
    private BoardDao boardDao;

    @Autowired 
    private SellerDao sellerDao;


    @GetMapping("/getmember")
    public Member getMember() {
        Member member = memberDao.selectById("spring1");
        return member;
    }

    @GetMapping("/getboard")
    public Board getBoard() {
        Board board = boardDao.selectById(1);
        return board;
    }
    
    @GetMapping("/getseller")
    public Seller getSeller(@RequestParam("sellerId") int sellerId) {
        Seller seller = sellerDao.selectById(sellerId);
        return seller;
    }
    
//----------------------------------------------------------------------
    @PostMapping("/joinmember")
    public Member joinMember(@RequestBody Member member) {
        //DB 저장
        memberDao.insert(member);
        
        //DB 저장된 회원정보가져옴
        
        Member dbMember = memberDao.selectById(member.getMemberId());
        return dbMember;
    }

    @PostMapping("/writeboard")
    public Board writeBoard(@RequestBody Board board){
        log.info(board.toString());
        boardDao.insert(board);
        log.info(board.toString());
        Board dbBoard = boardDao.selectById(board.getBoardId());
        return dbBoard;
    }

    @PostMapping("/joinseller")
    public Seller joinSeller(@RequestBody Seller seller) {
        //DB 저장
        sellerDao.insert(seller);
        
        //DB 저장된 회원정보가져옴
        
        Seller dbseller = sellerDao.selectById(seller.getSellerId());
        return dbseller;
    }

//----------------------------------------------------------------------
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


    @PutMapping("/updateboard")
    public Board updateBoard(@RequestBody Board board) {

        Board dbBoard = boardDao.selectById(board.getBoardId());

        dbBoard.setTitle(board.getTitle());
        dbBoard.setContent(board.getContent());

        boardDao.update(dbBoard);

        dbBoard = boardDao.selectById(board.getBoardId());
        return dbBoard;

    }


    @PutMapping("/updateseller")
    public Seller updateSeller(@RequestBody Seller seller) {

        Seller dbSeller = sellerDao.selectById(seller.getSellerId());

        dbSeller.setSellerName(seller.getSellerName());
        dbSeller.setEmail(seller.getEmail());
        dbSeller.setPhone(seller.getPhone());

        sellerDao.update(dbSeller);

        dbSeller = sellerDao.selectById(seller.getSellerId());
        return dbSeller;

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

    @DeleteMapping("/deleteboard")
    public String deleteBoard(@RequestParam("boardId") Long boardId) {
        int rows= boardDao.deleteById(boardId);
        if(rows==1){
            return "게시물 삭제 성공";
        }else {
            return "게시물 삭제 실패";
        }
    }

    @DeleteMapping("/deleteseller")
    public String deleteSeller(@RequestParam("sellerId") Long sellerId) {
        int rows= sellerDao.deleteById(sellerId);
        if(rows==1){
            return "판매자 삭제 성공";
        }else {
            return "판매자 삭제 실패";
        }
    }

    @GetMapping("/listmember")
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

    @GetMapping("/listboard")
    public Map<String,Object> listBoard(@RequestParam("pageNo") int pageNo){
        Map<String,Object> where = Map.of("title","배송과");
        int totalRows = boardDao.selectCount(where);
        Pager pager = new Pager(10, 5, totalRows, pageNo);
        List<Board> list = boardDao.selectPage(pager, where);
        Map<String,Object> map = new HashMap<>();
        map.put("pager",pager);
        map.put("data",list);
        return map;
    }


        @GetMapping("/listseller")
    public Map<String,Object> listSeller(@RequestParam("pageNo") int pageNo){
        Map<String,Object> where = Map.of("sellerName","문구");
        int totalRows = sellerDao.selectCount(where);
        Pager pager = new Pager(10, 5, totalRows, pageNo);
        List<Seller> list = sellerDao.selectPage(pager, where);
        Map<String,Object> map = new HashMap<>();
        map.put("pager",pager);
        map.put("data",list);
        return map;
    }
}
