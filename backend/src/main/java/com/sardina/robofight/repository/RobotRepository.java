package com.sardina.robofight.repository;

import com.sardina.robofight.model.Robot;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RobotRepository extends JpaRepository<Robot, Integer> {
}
