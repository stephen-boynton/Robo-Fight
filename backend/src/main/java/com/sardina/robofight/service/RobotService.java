package com.sardina.robofight.service;

import com.sardina.robofight.model.Robot;

import java.util.List;

public interface RobotService {

    Robot getById(int id);
    List<Robot> getAll();
    void delete(int id);

}
