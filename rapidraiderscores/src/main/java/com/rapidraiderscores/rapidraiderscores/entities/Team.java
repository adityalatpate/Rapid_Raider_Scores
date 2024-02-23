package com.rapidraiderscores.rapidraiderscores.entities;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Team")
public class Team {
	 	
		@Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long teamId;

	    private String teamName;
	    
		@Override
		public String toString() {
			return "Team [teamId=" + teamId + ", teamName=" + teamName + ", tournament=" + /*tournament +*/ "]";
		}


		public Team(Long teamId, String teamName, TournamentRegisteration tournament) {
			super();
			this.teamId = teamId;
			this.teamName = teamName;

		}


		public Team() {
			super();
		}


		public Long getTeamId() {
			return teamId;
		}


		public void setTeamId(Long teamId) {
			this.teamId = teamId;
		}


		public String getTeamName() {
			return teamName;
		}


		public void setTeamName(String teamName) {
			this.teamName = teamName;
		}
    
}

