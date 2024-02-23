package com.rapidraiderscores.rapidraiderscores.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rapidraiderscores.rapidraiderscores.entities.MatchDetails;
import com.rapidraiderscores.rapidraiderscores.entities.Team;
import com.rapidraiderscores.rapidraiderscores.exception.EmptyInputException;
import com.rapidraiderscores.rapidraiderscores.repository.MatchRepository;


import jakarta.transaction.Transactional;

@Service
@Transactional
public class MatchServiceImpl implements MatchService {
	
	@Autowired
	private MatchRepository matchRepo;

	@Override
	public MatchDetails addMatch(MatchDetails match) {
		MatchDetails matchData=matchRepo.save(match);
		return matchData;
	}

	@Override
	public List<MatchDetails> getAllMatches() {
		List<MatchDetails> regiMatchList=null;
		regiMatchList= matchRepo.findAll();
		if(regiMatchList.isEmpty()) {
			throw new EmptyInputException("602","Hey list is empty");
		}
		return regiMatchList;
	}
}
