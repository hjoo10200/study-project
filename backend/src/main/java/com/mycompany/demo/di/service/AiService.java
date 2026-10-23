package com.mycompany.demo.di.service;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Value;

import lombok.extern.slf4j.Slf4j;

@Service 
@Slf4j 
public class AiService {

    @Value("${openai_api_key:}")
    private String  openAiApikey;

    public void chat(){
       
        log.info("openAiApikey:{}", openAiApikey);
    }
}
