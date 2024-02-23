package com.rapidraiderscores.rapidraiderscores.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class TeamRegistration {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long teamTournamentRegisterId;

    @ManyToOne
    @JoinColumn(name = "team_id")
    private Team team;

    public TeamRegistration() {
		super();
	}

	@ManyToOne
    @JoinColumn(name = "tournament_id")
    private TournamentRegisteration tournament;


    public TeamRegistration(Team team, TournamentRegisteration tournament) {
        this.team = team;
        this.tournament = tournament;
    }

    public Long getId() {
        return teamTournamentRegisterId;
    }


    public Team getTeam() {
        return team;
    }

    public void setTeam(Team team) {
        this.team = team;
    }

    public TournamentRegisteration getTournament() {
        return tournament;
    }

    public void setTournament(TournamentRegisteration tournament) {
        this.tournament = tournament;
    }
}

