package com.sardina.robofight.service;


import com.sardina.robofight.model.Player;
import com.sardina.robofight.repository.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlayerServiceImpl implements PlayerService {

    @Autowired
    PlayerRepository playerRepository;

    @Override
    public Player add(Player player) {
        return playerRepository.save(player);
    }

    @Override
    public List<Player> getAll() {
        return playerRepository.findAll();
    }
}
