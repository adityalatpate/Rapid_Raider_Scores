import React from 'react'
import { Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { postMatchDetails } from '../Services/postMatchDetails';
import { useNavigate } from 'react-router-dom';

const Match = () => {
    const location = useLocation();
    const teams = location.state;
    const navigate = useNavigate();
    const [team1Score, setTeam1Score] = useState(0);
    const [team2Score, setTeam2Score] = useState(0);
    console.log(teams);
    
    const addPointTeam1 = () => {
        setTeam1Score(team1Score + 1);
    }

    const addPointTeam2 = () => {
        setTeam2Score(team2Score + 1);
    }

    const endMatch = () => {
        const data = {
            teamA: teams.selectedTeamData[0],
            teamAScore: team1Score,
            teamB: teams.selectedTeamData[1],
            teamBScore: team2Score,
        };
        console.log(data);   
        
        postMatchDetails(data).then(response => {
            console.log("Match details posted successfully:", response);
        }).catch(error => {
            console.error("Error posting match details:", error);
        });
        navigate('/main');
    }
    const removePointTeam1 = () => {
        setTeam1Score(team1Score - 1);
    }

    const removePointTeam2 = () => {
        setTeam2Score(team2Score - 1);
    }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Match</h1>
        <div className="container" style={{ paddingTop: '3%' }}>
            <div className="row">
                <div className="col">
                    <h3 style={{ textAlign: 'center' }}>Team 1</h3>
                    <h4 style={{ textAlign: 'center' }}>{teams.selectedTeamData[0]}</h4>
                    <h4 style={{ textAlign: 'center' }}>{team1Score}</h4>
                    <Button style={{ textAlign: 'center', marginLeft: '10%', backgroundColor:'purple' }} onClick={addPointTeam1}>Add 1 Point To Team 1(+)</Button>&nbsp;&nbsp;&nbsp;
                    <Button style={{ textAlign: 'center', backgroundColor:'purple' }} onClick={removePointTeam1}>Remove 1 Point From Team 1(-) </Button>
                </div>
                <div className="col">
                    <h3 style={{ textAlign: 'center' }}>Team 2</h3>
                    <h4 style={{ textAlign: 'center' }}>{teams.selectedTeamData[1]}</h4>
                    <h4 style={{ textAlign: 'center' }}>{team2Score}</h4>
                    <Button style={{ textAlign: 'center', marginLeft: '11%', backgroundColor:'purple'}} onClick={addPointTeam2}>Add 1 Point To Team 2(+)</Button> &nbsp;&nbsp;&nbsp;
                    <Button style={{ textAlign: 'center', backgroundColor:'purple'}} onClick={removePointTeam2}>Remove 1 Point From Team 2(-)</Button>
                </div>
            </div>
            <Button variant='danger' style={{ marginLeft: '38%', marginTop: '5%', width: '7cm' }} onClick={endMatch}>End Match</Button>
        </div>
    </div>
  )
}
export default Match;