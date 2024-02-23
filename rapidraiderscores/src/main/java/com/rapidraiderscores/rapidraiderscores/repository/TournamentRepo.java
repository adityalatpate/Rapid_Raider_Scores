package com.rapidraiderscores.rapidraiderscores.repository;

import java.time.LocalDate;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.rapidraiderscores.rapidraiderscores.entities.*;

@Repository
public interface TournamentRepo extends JpaRepository <TournamentRegisteration, Long>
{
	@Modifying
	@Query("Delete from TournamentRegisteration tr where tr.startDate < :oneYearAgo")
	void deleteOldData(LocalDate oneYearAgo);
	
}
