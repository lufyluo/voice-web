package com.voicer.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.ModelAndView;

import java.util.HashMap;

@Controller
@RequestMapping(value = "/index")
public class IndexController {
    @Autowired
    RestTemplate restTemplate;
    @RequestMapping
    public ModelAndView index(ModelAndView mv){
        mv.setViewName("/index");
        mv.addObject("name","欢迎使用Thymeleaf!");
        return mv;
    }
    @ResponseBody
    @RequestMapping(value = "/search", method = RequestMethod.GET)
    public String get(@RequestParam String key){
        String result = restTemplate.getForObject("http://localhost:8081/server", String.class);
        return result;
    }
}

