package com.mycompany.demo.di.service;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Value;

@Service
@Slf4j
public class AiService {
    @Value("${openai_api_key:}")
    private String openAipikey;

    public void chat(){
        log.info("오픈에이아이키:{}",openAipikey);
    }

}
