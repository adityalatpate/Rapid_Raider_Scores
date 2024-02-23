package com.rapidraiderscores.rapidraiderscores.repository;




import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rapidraiderscores.rapidraiderscores.entities.Team;

@Repository
public interface TeamRepository extends JpaRepository<Team,Long>{

		
}