package com.mycompany.demo.exception;

public class DuplicatedMemberIdException extends RuntimeException {
    public DuplicatedMemberIdException(){}
    public DuplicatedMemberIdException(String message){
        // 부모 생성자 호출
        super(message);
        
    }

}
