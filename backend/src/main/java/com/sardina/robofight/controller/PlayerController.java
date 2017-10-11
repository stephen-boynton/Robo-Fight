package com.sardina.robofight.controller;


import com.sardina.robofight.model.Player;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class PlayerController {

    //TODO: add: @Autowired PlayerService playerservice

    @RequestMapping(value = "/api/add_score", method = RequestMethod.POST)
    public Player addScore() {
        Player newScore = new Player();
        //TODO:
        return newScore;
    }

    @RequestMapping(value = "/api/leaderboard", method = RequestMethod.GET)
    public List<Player> getLeaderBoard() {
        List<Player> leaderBoard = new ArrayList<>();
        //TODO:
        return leaderBoard;
    }
}
