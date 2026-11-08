package com.mycompany.demo.database.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.server.ResponseStatusException;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mycompany.demo.database.dto.Pager;
import com.mycompany.demo.database.dto.ReviewDetailResponse;
import com.mycompany.demo.database.dto.ReviewListItemResponse;
import com.mycompany.demo.database.dto.ReviewWriteRequest;
import com.mycompany.demo.database.dto.ReviewWriteResponse;
import com.mycompany.demo.database.entity.Review;
import com.mycompany.demo.database.service.ReviewService;

import lombok.extern.slf4j.Slf4j;

@RestController 
@RequestMapping ("/review")
@Slf4j
public class ReviewController {
    private final ReviewService reviewService;

    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    @PostMapping("/write")
    public ReviewWriteResponse write(ReviewWriteRequest request) throws IOException {
        // TODO 1: 요청 DTO의 문자 필드를 Review 엔티티로 옮긴다.

        // TODO 2: 첨부파일이 있을 때만 파일명·타입·바이트 데이터를 엔티티에 담는다.

        // TODO 3: 서비스를 호출해 리뷰를 등록한다.

        // TODO 4: ReviewWriteResponse를 만들고 status를 success로 설정해 반환한다.

        // 실습 완료 후 아래 임시 예외를 삭제하고 자신의 코드로 응답한다.
        throw new UnsupportedOperationException("write 엔드포인트 실습을 완성해 주세요.");
    }

    @GetMapping("/list")
    public Map<String, Object> list(@RequestParam(value="pageNo",defaultValue="1") int pageNo) {
        // TODO 1: 검색 조건을 준비한다. 검색 없는 목록부터 시작한다.

        // TODO 2: 서비스로 전체 건수를 조회한다.

        // TODO 3: 페이지당 10행·그룹당 5페이지 기준으로 Pager를 생성한다.

        // TODO 4: 서비스에 Pager와 검색 조건을 전달해 현재 페이지를 조회한다.

        // TODO 5: 응답 목록을 만들고, 반복문에서 각 Review를 ReviewListItemResponse로 변환해 추가한다.

        // TODO 6: 목록 항목에는 reviewId, title, writer, writedAt, productId, fileName을 담는다.

        // TODO 7: pager와 data를 키로 갖는 Map을 만들어 반환한다.

        // 실습 완료 후 아래 임시 예외를 삭제하고 자신의 코드로 응답한다.
        throw new UnsupportedOperationException("list 엔드포인트 실습을 완성해 주세요.");
    }

    @GetMapping("/image")
    public ResponseEntity<byte[]> image(@RequestParam("reviewId") long reviewId) {
        // TODO 1: 서비스로 reviewId에 해당하는 리뷰를 조회한다.

        // TODO 2: 리뷰나 첨부 데이터가 없으면 HTTP 404를 반환한다.

        // TODO 3: 이미지 타입이 아니면 HTTP 415를 반환한다.

        // TODO 4: HTTP 200 응답에 저장된 Content-Type과 이미지 바이트 데이터를 담아 반환한다.

        // TODO 5: 응답 헤더 X-Content-Type-Options를 nosniff로 설정한다.

        // 실습 완료 후 아래 임시 예외를 삭제하고 자신의 코드로 응답한다.
        throw new UnsupportedOperationException("image 엔드포인트 실습을 완성해 주세요.");
    }

    @GetMapping("/detail")
    public ReviewDetailResponse detail(@RequestParam("reviewId") long reviewId) {
        // TODO 1: 서비스로 reviewId에 해당하는 리뷰를 조회한다.

        // TODO 2: 조회 결과가 없을 때의 처리를 작성한다. HTTP 404로 응답한다.

        // TODO 3: ReviewDetailResponse를 만들고 조회한 엔티티의 값을 옮긴다.

        // TODO 4: reviewId, title, content, writer, writedAt, productId, fileName을 담아 반환한다.

        // 실습 완료 후 아래 임시 예외를 삭제하고 자신의 코드로 응답한다.
        throw new UnsupportedOperationException("detail 엔드포인트 실습을 완성해 주세요.");
    }
}


