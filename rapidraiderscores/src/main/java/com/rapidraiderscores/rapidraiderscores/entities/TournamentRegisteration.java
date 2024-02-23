package com.rapidraiderscores.rapidraiderscores.entities;

import java.time.LocalDate;

import java.util.List;


import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class TournamentRegisteration {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long tournamentId;
	private String tournamentName;
    private String organizerName;
    private String tournamentDescription;
	private LocalDate startDate;
    private LocalDate endDate;
    private String phnNumber;
    private String locationVenue;
    private String tournamentFormat;
    private long entryFees;
    

	public TournamentRegisteration() {
		super();
		// TODO Auto-generated constructor stub
	}

	public TournamentRegisteration(long tournamentId, String tournamentName, String organizerName,
			String tournamentDescription, LocalDate startDate, LocalDate endDate, String phnNumber,
			String locationVenue, String tournamentFormat, long entryFees) {
		super();
		this.tournamentId = tournamentId;
		this.tournamentName = tournamentName;
		this.organizerName = organizerName;
		this.tournamentDescription = tournamentDescription;
		this.startDate = startDate;
		this.endDate = endDate;
		this.phnNumber = phnNumber;
		this.locationVenue = locationVenue;
		this.tournamentFormat = tournamentFormat;
		this.entryFees = entryFees;
		
	}

	public long getTournamentId() {
		return tournamentId;
	}


	public String getTournamentName() {
		return tournamentName;
	}

	public void setTournamentName(String tournamentName) {
		this.tournamentName = tournamentName;
	}

	public String getOrganizerName() {
		return organizerName;
	}

	public void setOrganizerName(String organizerName) {
		this.organizerName = organizerName;
	}

	public String getTournamentDescription() {
		return tournamentDescription;
	}

	public void setTournamentDescription(String tournamentDescription) {
		this.tournamentDescription = tournamentDescription;
	}

	public LocalDate getStartDate() {
		return startDate;
	}

	public void setStartDate(LocalDate startDate) {
		this.startDate = startDate;
	}

	public LocalDate getEndDate() {
		return endDate;
	}

	public void setEndDate(LocalDate endDate) {
		this.endDate = endDate;
	}

	public String getPhnNumber() {
		return phnNumber;
	}

	public void setPhnNumber(String phnNumber) {
		this.phnNumber = phnNumber;
	}

	public String getLocationVenue() {
		return locationVenue;
	}

	public void setLocationVenue(String locationVenue) {
		this.locationVenue = locationVenue;
	}

	public String getTournamentFormat() {
		return tournamentFormat;
	}

	public void setTournamentFormat(String tournamentFormat) {
		this.tournamentFormat = tournamentFormat;
	}

	public long getEntryFees() {
		return entryFees;
	}

	public void setEntryFees(long entryFees) {
		this.entryFees = entryFees;
	}    
    
}
