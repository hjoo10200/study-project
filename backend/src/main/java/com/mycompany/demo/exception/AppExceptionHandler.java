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
@RestControllerAdvice // 복수개의 예외가 실행되지 않기에 구체적인 예외가 우선이며 그 예외가 발생하지않으면 광역 예외가 후순위로 발생한다.
public class AppExceptionHandler { //예외처리가 필요한 이유는 200응답이 나타나도 실제 응답은 오류가 있을때를 위해 오류를 명확하게 하기위함
    
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
    public ResponseEntity<Map<String, Object>> handleNoAccountException(NoAccountException e){ //DuplicatedMemberIdException 객체가 들어옴
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
