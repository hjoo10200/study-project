package com.mycompany.demo.database.dto;

import java.util.stream.IntStream;

import lombok.Data;

@Data 
public class Pager {
	private int totalRows;		//전체 행수(페이징 대상이되는 행의 수)
	private int totalPageNo;	//전체 페이지 수
	private int totalGroupNo;	//전체 그룹 수
	private int startPageNo;	//그룹의 시작 페이지 번호
	private int endPageNo;		//그룹의 끝 페이지 번호
	private int[] pageArray;	//startPageNo ~ endPageNo 배열
	private int pageNo;			//현재 페이지 번호
	private int pagesPerGroup;	//그룹당 페이지 수
	private int groupNo;		//현재 그룹 번호
	private int rowsPerPage;	//페이지당 행 수 
	private int startRowNo;		//페이지의 시작 행 번호(1, ..., n)
	private int startRowIndex;	// 0부터 시작하는 위치: PostgreSQL/MySQL의 OFFSET에 전달할 건너뛸 행 수
	private int endRowNo;		// 계산상 마지막 행 번호(1부터 시작). 마지막 페이지에서는 실제 전체 행 수보다 클 수 있음
	private int endRowIndex;	// 계산상 마지막 행의 0 기준 인덱스(endRowNo - 1)

	public Pager(int rowsPerPage, int pagesPerGroup, int totalRows, int pageNo) {
		this.rowsPerPage = rowsPerPage;
		this.pagesPerGroup = pagesPerGroup;
		this.totalRows = totalRows;
		this.pageNo = pageNo;

		// 행이 남으면 한 페이지가 더 필요하므로 나머지가 있을 때 페이지 수를 1 늘린다.
		totalPageNo = totalRows / rowsPerPage;
		if(totalRows % rowsPerPage != 0) totalPageNo++;
		
		totalGroupNo = totalPageNo / pagesPerGroup;
		if(totalPageNo % pagesPerGroup != 0) totalGroupNo++;
		
		groupNo = (pageNo - 1) / pagesPerGroup + 1;
		
		startPageNo = (groupNo-1) * pagesPerGroup + 1;
		
		endPageNo = startPageNo + pagesPerGroup - 1;
		if(groupNo == totalGroupNo) endPageNo = totalPageNo;
		
		pageArray = IntStream.rangeClosed(startPageNo, endPageNo).toArray();
		
		startRowNo = (pageNo - 1) * rowsPerPage + 1;
		startRowIndex = startRowNo - 1;
		endRowNo = pageNo * rowsPerPage;
		endRowIndex = endRowNo - 1; 
	}
}
