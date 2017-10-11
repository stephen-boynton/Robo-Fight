package com.sardina.robofight.service;

import com.sardina.robofight.model.Robot;
import com.sardina.robofight.repository.RobotRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Random;

@Service
public class RobotServiceImpl implements RobotService {

    @Autowired
    RobotRepository robotRepository;

    @Transactional(readOnly = true)
    @Override
    public Robot getById(int id) {
        Random random = new Random();
        int num = random.nextInt(51);

        return robotRepository.getOne(num);
    }

    @Transactional(readOnly = true)
    @Override
    public List<Robot> getAll() {
        return robotRepository.findAll();
    }

    @Transactional
    @Override
    public void delete(int roboId) {
        robotRepository.delete(roboId);
    }
}
