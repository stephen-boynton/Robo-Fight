package com.sardina.robofight.service;

import com.sardina.robofight.model.Robot;
import com.sardina.robofight.repository.RobotRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;

@Service
public class RobotServiceImpl implements RobotService {

    @Autowired
    RobotRepository robotRepository;

    @Override
    public Robot getById(int id) {
        Random random = new Random();
        int num = random.nextInt(51);

        return robotRepository.getOne(num);
    }

    @Override
    public List<Robot> getAll() {
        return robotRepository.findAll();
    }

    @Override
    public void delete(int roboId) {
        robotRepository.delete(roboId);
    }
}
