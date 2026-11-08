package com.mycompany.demo.database.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;
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
@RequestMapping("/review")
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
    public Map<String, Object> list(@RequestParam(value = "pageNo", defaultValue = "1") int pageNo) {
        Map<String, Object> where = null;
        int totalRows = reviewService.pagingTotalRows(where);
        Pager pager = new Pager(10, 5, totalRows, pageNo);

        List<Review> list = reviewService.listReview(pager, where);

        List<ReviewListItemResponse> listReviewResponse = new ArrayList<>();
        for (Review dbReview : list) {
            ReviewListItemResponse reviewResponse = new ReviewListItemResponse();
            reviewResponse.setReviewId(dbReview.getReviewId());
            reviewResponse.setTitle(dbReview.getTitle());
            reviewResponse.setWriter(dbReview.getWriter());
            reviewResponse.setWritedAt(dbReview.getWritedAt());
            reviewResponse.setProductId(dbReview.getProductId());
            reviewResponse.setFileName(dbReview.getFileName());

            listReviewResponse.add(reviewResponse);

        }

        Map<String, Object> map = Map.of(
                "pager", pager,
                "data", listReviewResponse);

        return map;
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
        Review review = reviewService.getReview(reviewId);

        ReviewDetailResponse response = new ReviewDetailResponse();
        response.setReviewId(review.getReviewId());
        response.setTitle(review.getTitle());
        response.setContent(review.getContent());
        response.setWriter(review.getWriter());
        response.setProductId(review.getProductId());
        response.setFileName(review.getFileName());
        response.setWritedAt(review.getWritedAt());
        return response;
    }
}
