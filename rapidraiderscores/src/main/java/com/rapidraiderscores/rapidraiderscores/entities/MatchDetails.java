package com.rapidraiderscores.rapidraiderscores.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class MatchDetails {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private long matchId;
	private String teamA;
	private String teamAScore;
	private String teamB;
	private String teamBScore;
	
	public MatchDetails() {
		super();
		// TODO Auto-generated constructor stub
	}

	public MatchDetails(long matchId, String teamA, String teamAScore, String teamB, String teamBScore) {
		super();
		this.matchId = matchId;
		this.teamA = teamA;
		this.teamAScore = teamAScore;
		this.teamB = teamB;
		this.teamBScore = teamBScore;
	}

	public long getMatchId() {
		return matchId;
	}

	public void setMatchId(long matchId) {
		this.matchId = matchId;
	}

	public String getTeamA() {
		return teamA;
	}

	public void setTeamA(String teamA) {
		this.teamA = teamA;
	}

	public String getTeamAScore() {
		return teamAScore;
	}

	public void setTeamAScore(String teamAScore) {
		this.teamAScore = teamAScore;
	}

	public String getTeamB() {
		return teamB;
	}

	public void setTeamB(String teamB) {
		this.teamB = teamB;
	}

	public String getTeamBScore() {
		return teamBScore;
	}

	public void setTeamBScore(String teamBScore) {
		this.teamBScore = teamBScore;
	}

	@Override
	public String toString() {
		return "MatchDetails [matchId=" + matchId + ", teamA=" + teamA + ", teamAScore=" + teamAScore + ", teamB="
				+ teamB + ", teamBScore=" + teamBScore + "]";
	}	

}
