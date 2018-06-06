package com.voicer.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import java.util.HashMap;

@Controller
@RequestMapping(value = "/index")
public class IndexController {
    @RequestMapping
    public ModelAndView index(ModelAndView mv){
        mv.setViewName("/index");
        mv.addObject("name","欢迎使用Thymeleaf!");
        return mv;
    }
    @ResponseBody
    @RequestMapping(value = "/search", method = RequestMethod.GET)
    public HashMap<String, Object> get(@RequestParam String name){
        HashMap<String, Object> map = new HashMap<String, Object>();
        map.put("success", true);
        map.put("items", name);
        return map;
    }
}

