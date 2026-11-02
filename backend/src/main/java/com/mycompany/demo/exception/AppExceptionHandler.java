package com.mycompany.demo.exception;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

import org.postgresql.util.PSQLException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.NoHandlerFoundException;
import org.springframework.web.servlet.resource.NoResourceFoundException;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestControllerAdvice // 컨트롤러 밖으로 전파된 예외를 공통 처리한다. 이 클래스의 같은 예외 후보 중에서는 더 구체적인 타입의 핸들러가 선택된다.
public class AppExceptionHandler { // 예외별 HTTP 상태와 응답 본문을 정한다. 아래 코드는 리소스 없음에 404, 나머지 처리 예외에 500을 반환한다.
    
    @ExceptionHandler(SQLException.class)
    public ResponseEntity<Map<String, Object>>  handleSQLException(SQLException e){ //exception 객체가 들어옴
    Map <String,Object> map = new HashMap<>();
    map.put("status","fail"); 
    map.put("message",e.getMessage());      
    map.put("methodName", "handleSQLException");
        
    return ResponseEntity
            .status(HttpStatus.INTERNAL_SERVER_ERROR)
            .body(map);

    
    }

    @ExceptionHandler(PSQLException.class)
    public ResponseEntity<Map<String, Object>>  handlePSQLException(PSQLException e){ //exception 객체가 들어옴
    Map <String,Object> map = new HashMap<>();
    map.put("status","fail"); 
    map.put("message",e.getMessage());      
    map.put("methodName", "handlePSQLException");
        
    return ResponseEntity
            .status(HttpStatus.INTERNAL_SERVER_ERROR)
            .body(map);

    
    }
    @ExceptionHandler(NullPointerException.class)
    public ResponseEntity<Map<String, Object>> handleNullPointerException(Exception e){ //exception 객체가 들어옴
    Map <String,Object> map = new HashMap<>();
    map.put("status","fail"); 
    map.put("message",e.getMessage());      
    map.put("methodName", "NullPointerException");
        
    return ResponseEntity
            .status(HttpStatus.INTERNAL_SERVER_ERROR)
            .body(map);

    
    }

    @ExceptionHandler(DuplicatedMemberIdException.class)
    public ResponseEntity<Map<String, Object>> handleDuplicatedMemberIdException(DuplicatedMemberIdException e){ //DuplicatedMemberIdException 객체가 들어옴
    Map <String,Object> map = new HashMap<>();
    map.put("status","fail"); 
    map.put("message",e.getMessage());      
    map.put("methodName", "handleDuplicatedMemberIdException");
        
    return ResponseEntity
            .status(HttpStatus.INTERNAL_SERVER_ERROR)
            .body(map);

    
    }

    @ExceptionHandler(NoAccountException.class)
    public ResponseEntity<Map<String, Object>> handleNoAccountException(NoAccountException e){ // 발생한 NoAccountException 객체를 받는다.
    Map <String,Object> map = new HashMap<>();
    map.put("status","fail"); 
    map.put("message",e.getMessage());      
    map.put("methodName", "handleNoAccountException");
        
    return ResponseEntity
            .status(HttpStatus.INTERNAL_SERVER_ERROR)
            .body(map);

    
    }

    @ExceptionHandler(NoResourceFoundException.class)
    public ResponseEntity<Map<String, Object>> handleNoResourceFoundException (NoResourceFoundException  e){ //exception 객체가 들어옴
    Map <String,Object> map = new HashMap<>();
    map.put("status","fail"); 
    map.put("message","똑바로 입력하세요");      
    map.put("methodName", "NoResourceFoundException");
        
    return ResponseEntity
            .status(HttpStatus.NOT_FOUND)
            .body(map);

    
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<Map<String, Object>> handleException(Exception e){ //exception 객체가 들어옴
    Map <String,Object> map = new HashMap<>();
    map.put("status","fail"); 
    map.put("message",e.getMessage());      
    map.put("methodName", "handleException");
        
    return ResponseEntity
            .status(HttpStatus.INTERNAL_SERVER_ERROR)
            .body(map);

    
    }

}
