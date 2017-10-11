package com.sardina.robofight.controller;

import com.sardina.robofight.model.Robot;
import com.sardina.robofight.service.RobotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class RobotController {

    @Autowired
    RobotService robotService;

    @RequestMapping(value = "/api/index", method = RequestMethod.GET)
    public List<Robot> initialRoboGroup() {
        List<Robot> robos = new ArrayList<>();
            //TODO:
        return robos;
    }

    @RequestMapping(value = "/api/set_one", method = RequestMethod.GET)
    public Robot getOneRoboToFight(){
        Robot robo = new Robot();
            //TODO:
        return robo;
    }

    @RequestMapping(value = "/api/delete/{id}", method = RequestMethod.DELETE)
    public void deleteRobo(@PathVariable("id") int roboId){
        //TODO: robotService.delete(roboID)
    }


}
