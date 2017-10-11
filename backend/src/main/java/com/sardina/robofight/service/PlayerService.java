package com.sardina.robofight.service;

import com.sardina.robofight.model.Player;

import java.util.List;

public interface PlayerService {

    Player add(Player player);
    List<Player> getAll();

}
