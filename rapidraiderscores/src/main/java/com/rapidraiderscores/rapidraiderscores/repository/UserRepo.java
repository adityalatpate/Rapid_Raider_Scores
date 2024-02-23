package com.rapidraiderscores.rapidraiderscores.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.rapidraiderscores.rapidraiderscores.entities.UserRegister;

@Repository
public interface UserRepo extends JpaRepository<UserRegister,String> {
	
	UserRegister findByPhnNumber(String phnNumber);

}
