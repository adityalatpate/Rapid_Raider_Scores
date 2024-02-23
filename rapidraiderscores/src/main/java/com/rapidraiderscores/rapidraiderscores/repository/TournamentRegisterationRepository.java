package com.rapidraiderscores.rapidraiderscores.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.rapidraiderscores.rapidraiderscores.entities.TeamRegistration;
import com.rapidraiderscores.rapidraiderscores.entities.TournamentRegisteration;


@Repository
public interface TournamentRegisterationRepository extends JpaRepository<TeamRegistration, Long> 
{
	
    List<TeamRegistration> findByTournament(TournamentRegisteration tournament); 
}
