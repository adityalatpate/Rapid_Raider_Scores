import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchTeamDataByTourId } from '../Services/fetchTeamDataByTourId';
import Table from 'react-bootstrap/Table';
import{ Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const StartTournament = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const tournamentData = location.state;
    const [teamTourJointTableData, setTeamTourJointTableData] = useState([]);
    const [selectedTeams, setSelectedTeams] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchTeamDataByTourId(location.state.particularTournamentData);
                setTeamTourJointTableData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [location.state.particularTournamentData]);

    const handleStartButtonClick = (selectedTeamData) => {
      console.log(selectedTeamData);
      navigate('/match', { state:{selectedTeamData}});
    }
    const handleTableRowClick = (team) => {
        if (selectedTeams.length < 2) {
            alert(`Selected team: ${team.team.teamName}`);
            setSelectedTeams([...selectedTeams, team.team.teamName]);
        } else {
            alert('You can only select two teams.');
        }
    };

    return (
        <div className="container">
            <h1 style={{ textAlign: 'center' }}>Team Data</h1>
            <Table striped bordered hover style={{ marginTop: '3%', borderCollapse: 'collapse', textAlign: 'center' }}>
                <thead style={{ backgroundColor: '#f8f9fa' }}>
                    <tr>
                        <th style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>Team ID</th>
                        <th style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>Team Name</th>
                    </tr>
                </thead>
                <tbody>
                    {teamTourJointTableData.map((team, index) => (
                        <tr key={index} style={{ borderBottom: '1px solid #dee2e6' }} onClick={() => handleTableRowClick(team)}>
                            <td style={{ padding: '10px' }}>{team.team.teamId}</td>
                            <td style={{ padding: '10px' }}>{team.team.teamName}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <div>
                <Button disabled={selectedTeams.length !== 2} onClick={()=>handleStartButtonClick(selectedTeams)}>Start match</Button>
            </div>
        </div>
    );
};

export default StartTournament;
