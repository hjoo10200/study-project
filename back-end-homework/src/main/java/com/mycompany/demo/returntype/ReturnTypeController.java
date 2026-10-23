package com.mycompany.demo.returntype;



import java.io.FileInputStream;
import java.io.OutputStream;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;





@RestController
@RequestMapping("/returntype")
@Slf4j 
public class ReturnTypeController {
@GetMapping("/download")
public void download(HttpServletResponse response) throws Exception {

    String filepath ="C:/gen-ai-course/data/image/generatedImage-2-1536x1024.png";

    response.addHeader("content-type","image/png");
    response.addHeader("content-dispostion","attachment; filename=\"generatedImage-2-1536x1024.png\"");

    int chuncksize = 1024;

    byte[]data =new byte[chuncksize];

    FileInputStream fis = new FileInputStream(filepath);
    OutputStream os = response.getOutputStream();


    while (true) {
        int num =fis.read(data);

        if(num==-1) break;
        os.write(data,0,num);


    }

    os.flush();
    fis.close();
    os.close();
}
}
