package com.mycompany.demo.database.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mycompany.demo.database.dto.Pager;
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
        //review entity로 변환
        Review review = new Review();
        review.setTitle(request.getTitle());
        review.setContent(request.getContent());
        review.setWriter(request.getWriter());
        review.setProductId(request.getProductId());

        if (request.getFile() != null && !request.getFile().isEmpty()) {
            review.setFileName(request.getFile().getOriginalFilename());
            review.setFileType(request.getFile().getContentType());
            review.setFileData(request.getFile().getBytes());
        }
        //서비스로 entity로 전달해서 글쓰기 처리
        reviewService.writeReview(review);
        ReviewWriteResponse reviewWriteResponse = new ReviewWriteResponse();
        reviewWriteResponse.setStatus("success");
        return reviewWriteResponse;
    
    }

    @GetMapping("/list")
        public Map<String, Object> list(@RequestParam(value="pageNo",defaultValue="1") int pageNo) {

        Map<String, Object> where = null; 
        int totalRows= reviewService.pagingTotalRows(where);
        Pager pager = new Pager(10,5,totalRows, pageNo);

        List<Review> list= reviewService.listReview(pager,where);
        List<ReviewListItemResponse> listReviewResponse = new ArrayList<>();
        for (Review dbReview: list) {
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
            "pager",pager,
            "data", listReviewResponse);
        return map;
    }
}


