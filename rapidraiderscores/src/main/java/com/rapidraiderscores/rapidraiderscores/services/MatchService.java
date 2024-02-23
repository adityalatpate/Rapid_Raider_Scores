package com.rapidraiderscores.rapidraiderscores.services;

import java.util.List;

import com.rapidraiderscores.rapidraiderscores.entities.MatchDetails;

public interface MatchService {

	public MatchDetails addMatch(MatchDetails match);

	public List<MatchDetails> getAllMatches();

}
