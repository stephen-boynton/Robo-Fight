package com.sardina.robofight.model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "robot")
public class Robot {

    private int id;
    private String name;
    private String occupation;
    private List<String> skills;
    private String avatar;

  // -- POJO --
    public Robot() {}

  // -- GETTERs/SETTERs --

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Column(name = "name")
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Column(name = "occupation")
    public String getOccupation() {
        return occupation;
    }

    public void setOccupation(String occupation) {
        this.occupation = occupation;
    }

    @OneToMany(mappedBy = "robot", fetch = FetchType.LAZY)
    public List<String> getSkills() {
        return skills;
    }

    public void setSkills(List<String> skills) {
        this.skills = skills;
    }

    @Column(name = "avatar")
    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

  // --------------------
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Robot robot = (Robot) o;

        return id == robot.id;
    }

    @Override
    public int hashCode() {
        return id;
    }

  // -- Override toString() --
    @Override
    public String toString() {
        return "Robot{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", occupation='" + occupation + '\'' +
                ", skills=" + skills +
                ", avatar='" + avatar + '\'' +
                '}';
    }
}
