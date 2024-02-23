import React, { useState, useEffect } from 'react';
import { fetchTournaments } from '../Services/getTournamentDataService';
import { Button, Card, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import {faCalendarDays} from '@fortawesome/free-solid-svg-icons';
import KabaddiChampionshipImage1 from '../Assests/KabaddiChampionship.png';
import KabaddiChampionshipImage2 from '../Assests/KabaddiChampionship2.png';
import KabaddiChampionshipImage3 from '../Assests/KabaddiChampionship3.png';
import { useNavigate } from 'react-router-dom';



const ShowTournament = (props) => 
{
    const [tournaments, setTournaments] = useState([]);
    const images = [KabaddiChampionshipImage1, KabaddiChampionshipImage2, KabaddiChampionshipImage3]
    const [selectedLocations, setSelectedLocations] = useState([]);
    const navigate = useNavigate();
    console.log(props);
    // Function to handle checkbox change
    const handleCheckboxChange = (location) => {
        // Toggle selection status of the location
        if (selectedLocations.includes(location)) {
            setSelectedLocations(selectedLocations.filter(loc => loc !== location));
        } else {
            setSelectedLocations([...selectedLocations, location]);
        }
    };

    const handleRegisterClick  = (particularTournamentData) => {
        console.log(particularTournamentData);
        navigate('/addteam', { state:{particularTournamentData}});
    };

    useEffect(() => {
        // Define a function to fetch tournaments and update state
        const fetchData = async () => {
            try {
                const data = await fetchTournaments();
                console.log(data);
                setTournaments(data);
            } catch (error) {
                // Handle error
                console.error('Error fetching tournaments:', error);
            }
        };

        // Call the fetchData function when the component is mounted or rendered
        fetchData();
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(date);
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    };

    const startTournament  = (particularTournamentData) => {
        console.log(particularTournamentData);
        navigate('/starttour', { state:{particularTournamentData}});
    };

    return (
        <div>
            <h2 style={{textAlign:'center'}}>Tournaments</h2>
            <div style={{display:'flex' }}>
                <div style={{width:'10%', marginTop:'20px', marginLeft:'20px'}}>  
                    {/* Create checkboxes for each unique location */}
                    <h4>Locations</h4>
                    {/*Below is the array of locations. Tournaments.map will iterate through the tournaments array and get all locations and store it in an Set. Where all the unique locations are stored. Then, the Set is converted into an array and array is iterated. */}
                    {Array.from(new Set(tournaments.map(tournament => tournament.locationVenue))).map((location, index) => (
                        <div key={index}>
                            <Form.Check
                                type="checkbox"
                                id={location}
                                label={location}
                                checked={selectedLocations.includes(location)}
                                onChange={() => handleCheckboxChange(location)}
                            />
                        </div>
                    ))}
                </div>
                
                <div style={{display:'flex', flexWrap:'wrap', }}>
                    {/* Map through tournaments and filter based on selected locations */}
                    {tournaments.filter(tournament => selectedLocations.length === 0 || selectedLocations.includes(tournament.locationVenue)).map((tournament, index) => (
                        <div key={tournament.tournamentId} style={{margin:'20px'}}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={images[index % images.length]} style={{height:'6cm', width:'7.58cm'}}/>
                                <Card.Body>
                                    <Card.Title>{tournament.tournamentName}</Card.Title>
                                    <Card.Text>
                                        <FontAwesomeIcon icon={faCalendarDays} /> &nbsp;
                                        {formatDate(tournament.startDate)} <b>to</b> {formatDate(tournament.endDate)}
                                        <br />
                                        <FontAwesomeIcon icon={faLocationDot} /> &nbsp;
                                        {tournament.locationVenue}
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => handleRegisterClick(tournament)} disabled={props.loginData.phnNumber !== tournament.phnNumber}>Register</Button> &nbsp;&nbsp;&nbsp;&nbsp;
                                    <Button variant="primary" onClick={()=> startTournament(tournament)} disabled={props.loginData.phnNumber !== tournament.phnNumber}>Start Tournament</Button>
                                </Card.Body>
                            </Card>    
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default ShowTournament;