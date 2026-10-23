package com.mycompany.demo.returntype.controller;

import java.io.FileInputStream;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mycompany.demo.returntype.dto.Board;
import com.mycompany.demo.returntype.dto.Member;

import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/returntype")
@Slf4j 
public class ReturnTypeController {
@GetMapping ("/String")
 public String getString(){
    return "문자열 결과";
}

 @GetMapping (value="/dto", produces = {MediaType.APPLICATION_JSON_VALUE,MediaType.APPLICATION_XML_VALUE})
 public Board getDtO(){
    // Board Board = new Board();
    // // board.setBno(bno,5);
    // // board.SetBtitle(btitle,'제목');

    Board board = new Board(5,"title21","content","hong",new Date());
    return board;
}

 @GetMapping (value="/dto2", produces = {MediaType.APPLICATION_JSON_VALUE,MediaType.APPLICATION_XML_VALUE})
 public Member getDtO2(){
    Member member = new Member();
    member.setBno(1);
    member.setBname("han");
    member.setBid("hjoo101010");
    member.setBpassword("12345a");
    member.setBhobby("biking1021");
    member.setBdate(new Date());


    // Member member = new Member(1,"Han","hjoo","12345a","hiking",new Date());
    return member;
 }

 @GetMapping ("/list")
 public List<Board> getList(){
   List<Board> list = new ArrayList<>();

   for(int i=0; i<5; i++){
      Board board = new Board(i,"title"+i,"content"+i,"hong",new Date());
      list.add(board);
   }

   return list;
 }

@GetMapping("/map")
 public Map<String, Object> getMap(){
   Map<String, Object> map = new HashMap<>();
   map.put("bno", 1);
   map.put("bdate",new Date());
   map.put("btitle","제목");
   map.put("bcontent","내용");
   map.put("bwwriter","홍길동");
   return map;
 }
@GetMapping("/response-entity")
 public ResponseEntity<Board> getResponseEntity(){
   Board board = new Board(5,"title21","content","hong",new Date());
 
   return ResponseEntity
   .status(401)
   .header("myheader", "myvalue")
   .body(board);
}

@GetMapping("/http-entity")
public HttpEntity<Board> getHttpEntity(){
   Board board = new Board(5,"title21","content","hong",new Date());
   HttpHeaders httpheaders = new HttpHeaders();
   httpheaders.add("my-header", "my-value");
   HttpEntity<Board> httpEntity = new HttpEntity<>(board,httpheaders);
   return httpEntity;
}
 


@ GetMapping("/download")
public void download(HttpServletResponse response) throws Exception { 
   log.info("실행");
// 파일 경로
   String filepath ="C:/gen-ai-course/data/image/generatedImage-1-1536x1024.png";


// 응답 헤드 추가 ===============================================
response.addHeader("Content-type", "image/png"); //MIME type
response.addHeader("Content-Disposition", "attachment; filename = \"generatedImage-1-1536x1024.png\"");


//응답 본문에 파일 데이터 추가 ====================================
// 읽고 응답본문에 출력하는 단위   
   int chuncksize = 1024; //1kb

// 데이터 버퍼 (1kb에 해당되는 데이터가 저장되는 배열)
   byte[] data = new byte[chuncksize]; 

// 입력 스트림 얻기
   FileInputStream fis = new FileInputStream(filepath);

// 출력 스트림 얻기(응답본문에 출력)
   OutputStream os = response.getOutputStream();

// 청크 크기 만큼 읽고 출력을 반복

while (true) {
   // 최대 청크 크기만큼 읽고, 실제로 읽은 바이트 수를 반환
   // 읽은 데이터는 데이터 버퍼 저장
   int num = fis.read(data);
   // 읽은 데이터를 본문에 출력
   if(num== -1) break;
   os.write(data, 0, num);

   }
   os.flush(); 
   fis.close();
   os.close();

}
}

