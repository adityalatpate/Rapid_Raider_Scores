import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Form, Table, Modal, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { fetchTeamData } from '../Services/fetchTeamData';
import { sendRegisteredTeam } from '../Services/sendRegisteredTeam';
import { sendTeamData } from '../Services/sendTeamData';


const AddTeamForm = ({ tournamentId }) => {
  // State to manage form input fields
  const [teamName, setTeamName] = useState('');
  const [teamNameData, setTeamNameData] = useState('');
  const location = useLocation();
  const [tournamentsData, setTournamentsData] = useState(null);
  const [filteredTeamData, setFilteredTeamData] = useState([]); 
  const [modalShow, setModalShow] = useState(false);
  const [teamData, setTeamData] = useState([]);
  
  

  useEffect(() => {
    // Fetch team data when the component mounts
    fetchTeamData()
      .then(data => {
        // Set the fetched team data in the state
        setTeamData(data);
        setFilteredTeamData(data);
        console.log('Team data fetched successfully:', data);
        setTournamentsData(location.state);
        console.log('location.state:', location.state);
      })
      .catch(error => {
        // Handle error if fetching team data fails
        console.error('Error fetching team data:', error);
      });
      
      
  }, [location.state]); 

  const onHide = () => setModalShow(false);
  const closeAddTeamModal = () => {
    setTeamName('');
    onHide();
}

  const addTeam=async () => {
    console.log("Team Name: ", teamName);

    // Check if teamName is not empty
    if (!teamName.trim()) {
        console.error("Team name cannot be empty.");
        return;
    }

    // Call sendTeamData function to send team data
    try {
        const data = await sendTeamData({ teamName });
        console.log("Team data sent successfully:", data);
        // Clear teamName after successful submission
        setTeamName('');
        onHide();
        fetchTeamDataFromParentClass();
    } catch (error) {
        console.error("Error sending team data:", error);
        window.alert("Some Error Occurred. Please Try again later. After Some time!!");
        // Clear teamName on error as well
        setTeamName('');
    }    
  }

  const fetchTeamDataFromParentClass = () => {
    fetchTeamData()
    .then(data => {
      // Set the fetched team data in the state
      setTeamData(data);
      setFilteredTeamData(data);
      console.log('Tournament Data 1:', tournamentsData);
      console.log("hii");
      console.log('Team data fetched successfully:', data);
      
    })
    .catch(error => {
      // Handle error if fetching team data fails
      console.error('Error fetching team data:', error);
    });
  
  }

  const handleTableRowClick = async (teamData) => {
    console.log('Team data:', teamData.teamId);
    console.log('Tournament Data:', tournamentsData);

    try {
        const response = await sendRegisteredTeam(tournamentsData.particularTournamentData.tournamentId, teamData.teamId);
        console.log('Team registration response:', response);
        window.alert(teamData.teamName +' registered successful!');
    } catch (error) {
        console.error('Error registering team:', error);
        window.alert("Some Error Occurred. Please Try again later. After Some time!!");
    }
    // fetchTeamDataFromParentClass();
}


  const handleSearch = (searchText) => {
      if (searchText.trim() === '') {
        // If the search text is empty, show all team data
        setFilteredTeamData(teamData);
        console.log("Hello",teamData);
      } else{
      const filteredData = teamData.filter(team => 
        team.teamName.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredTeamData(filteredData);
    }
  };

  return (
    <div style={{paddingLeft:'5%', paddingRight:'10%', paddingTop:'2%'}}>
        <Form>
          <Form.Group controlId="formTeamName">
            <br />
            <Form.Label>Team Name:</Form.Label>
            <Form.Control 
              type="text" 
              value={teamNameData} 
              onChange={(e) => {
                setTeamNameData(e.target.value);
                handleSearch(e.target.value);
              }} 
              placeholder="Enter team name" 
              style={{ width: '30%' }}
            />
          </Form.Group>
          {/* Add Link to make a new team */}
          <div style={{marginTop:'7px'}}>
            <span>Don't Have A Team Registered. </span>
            <Link onClick={() => setModalShow(true)} style={{ textDecoration: 'none' }}>Register New Team ?</Link>
          </div>
          
        </Form>

        <Modal
            show={modalShow}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                Register New Team Here.
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formTeamName">
                    <Form.Label>Team Name:</Form.Label>
                    <Form.Control 
                        type="text" 
                        value={teamName} 
                        onChange={(e) => setTeamName(e.target.value)} 
                        placeholder="Enter team name" 
                    />
                    </Form.Group>
                </Form>
                <br />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={addTeam}>Add</Button>
                <Button onClick={closeAddTeamModal}>Close</Button>
            </Modal.Footer>
            </Modal>
      
      {/* <RegisterNewTeam
        show={modalShow}
        onHide={() => setModalShow(false)}
        onAddTeam={fetchTeamDataFromParentClass}
      /> */}
      <Table striped bordered hover style={{marginTop:'3%', borderCollapse: 'collapse', textAlign: 'center' }}>
        <thead style={{ backgroundColor: '#f8f9fa' }}>
          <tr>
            <th style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>Team ID</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>Team Name</th>
          </tr>
        </thead>
        <tbody>
          {filteredTeamData.map(team => (
            <tr key={team.teamId} style={{ borderBottom: '1px solid #dee2e6' }}>
              <td style={{ padding: '10px' }}  onClick={() => handleTableRowClick(team)}>{team.teamId}</td>
              <td style={{ padding: '10px' }} onClick={() => handleTableRowClick(team)}>{team.teamName}</td>
            </tr>
          ))}
        </tbody>
      </Table>

    </div>
    
  );
};

export default AddTeamForm;
