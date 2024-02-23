import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Register_Tournament from './Register_Tournament';
import ShowTournament from './ShowTournaments';
import { Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import KabaddiMain1 from '../Assests/KabaddiMain1.jpg';



const MainNavbar = () => 
{
  const [showRegisterTournament, setShowRegisterTournament] = useState(false);
  const [showTournament, setShowTournament]=useState(false);
  const location = useLocation();
  var loginData={};
  if(location.state){
    loginData = location.state.loginInfo;
    console.log(loginData);  
  }
  else{
    loginData ={
      phnNumber: '+919765819169',
      firstName: 'Aditya',
      lastName: 'Latpate'} 
  }
  
  const handleRegisterTournamentClick = () => {
    setShowTournament(false);
    setShowRegisterTournament(true);
  };

  const handleShowTournamentClick = () => {
    setShowRegisterTournament(false)
    setShowTournament(true);
  };


  return(
    <div >
      <div>
        <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/main" style={{paddingLeft:'8%'}}>Rapid Raider Scores</Navbar.Brand>
            <Nav className="me-auto">
              <NavDropdown title="Tournament" id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={handleRegisterTournamentClick}>Register Tournament</NavDropdown.Item>
                  <NavDropdown.Item onClick={handleShowTournamentClick} >Tournaments</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/showmatches">Matches</Nav.Link>
              <Nav.Link href="/kabaddiinfo">Kabaddi Rules</Nav.Link>
            </Nav>
          </Container>
          <Button style={{paddingRight:'10%'}} href='/login'>Logout</Button>
        </Navbar>
        {showRegisterTournament && <Register_Tournament />}
        {showTournament && <ShowTournament loginData={loginData}/>}
        <br /><br />
        {
        !showRegisterTournament && !showTournament &&
        <marquee behavior="scroll" direction="right" scrollamount="20">
          <img src={KabaddiMain1} alt="Your image" />
        </marquee>
        }
      </div> 
    </div>
    
  );
};

export default MainNavbar;

